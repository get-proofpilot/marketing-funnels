/*
  # Quiz Funnel Database Schema

  ## Overview
  This migration creates the database structure for a marketing agency quiz funnel
  targeting home service businesses. It captures lead information and quiz responses
  to qualify potential clients.

  ## New Tables
  
  ### `leads`
  Stores contact information and business details for potential clients
  - `id` (uuid, primary key) - Unique identifier
  - `business_name` (text) - Name of the home service business
  - `contact_name` (text) - Primary contact person
  - `email` (text, unique) - Contact email address
  - `phone` (text) - Contact phone number
  - `business_type` (text) - Type of home service (plumbing, HVAC, etc.)
  - `created_at` (timestamptz) - When the lead was captured
  - `updated_at` (timestamptz) - Last update timestamp

  ### `quiz_responses`
  Stores individual quiz responses linked to leads
  - `id` (uuid, primary key) - Unique identifier
  - `lead_id` (uuid, foreign key) - References the lead who took the quiz
  - `responses` (jsonb) - Quiz answers stored as JSON
  - `score` (integer) - Calculated marketing readiness score
  - `recommendations` (text[]) - Array of recommended services
  - `completed_at` (timestamptz) - When the quiz was completed

  ## Security
  - Enable RLS on both tables
  - Public insert access for lead capture (no auth required for new leads)
  - Authenticated admin access for reading data
  
  ## Notes
  - Email field has unique constraint to prevent duplicate leads
  - JSONB format allows flexible quiz question structure
  - Recommendations array enables personalized service suggestions
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  contact_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  business_type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create quiz_responses table
CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  responses jsonb NOT NULL DEFAULT '{}'::jsonb,
  score integer DEFAULT 0,
  recommendations text[] DEFAULT ARRAY[]::text[],
  completed_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

-- Policies for leads table
CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for quiz_responses table
CREATE POLICY "Anyone can insert quiz responses"
  ON quiz_responses FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quiz responses"
  ON quiz_responses FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_quiz_responses_lead_id ON quiz_responses(lead_id);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);