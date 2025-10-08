/*
  # Add Lead Magnet Download Tracking

  1. New Tables
    - `lead_magnet_downloads`
      - `id` (uuid, primary key)
      - `lead_id` (uuid, foreign key to leads table, nullable for anonymous downloads)
      - `magnet_type` (text) - Type of lead magnet (e.g., 'seo-guide-2025')
      - `downloaded_at` (timestamptz) - When the download occurred
      - `ip_address` (text, nullable) - For tracking anonymous downloads
      - `user_agent` (text, nullable) - Browser info
      
  2. Changes
    - Add tracking for lead magnet downloads
    - Allow anonymous downloads (no email required)
    - Link downloads to leads when available
    
  3. Security
    - Enable RLS on `lead_magnet_downloads` table
    - Add policy for inserting download records
    - Add policy for viewing own download history
*/

-- Create lead_magnet_downloads table
CREATE TABLE IF NOT EXISTS lead_magnet_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id) ON DELETE SET NULL,
  magnet_type text NOT NULL,
  downloaded_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

-- Enable RLS
ALTER TABLE lead_magnet_downloads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert download records (for tracking anonymous downloads)
CREATE POLICY "Anyone can insert download records"
  ON lead_magnet_downloads
  FOR INSERT
  WITH CHECK (true);

-- Policy: Users can view their own download history if authenticated
CREATE POLICY "Users can view own download history"
  ON lead_magnet_downloads
  FOR SELECT
  TO authenticated
  USING (lead_id IN (SELECT id FROM leads WHERE email = current_user));

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_lead_magnet_downloads_lead_id ON lead_magnet_downloads(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_magnet_downloads_magnet_type ON lead_magnet_downloads(magnet_type);
CREATE INDEX IF NOT EXISTS idx_lead_magnet_downloads_downloaded_at ON lead_magnet_downloads(downloaded_at);
