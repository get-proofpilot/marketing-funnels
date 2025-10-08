import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  business_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  business_type: string;
  created_at?: string;
  updated_at?: string;
}

export interface QuizResponse {
  id?: string;
  lead_id: string;
  responses: Record<string, any>;
  score: number;
  recommendations: string[];
  completed_at?: string;
}
