import { createClient } from '@supabase/supabase-js';
import { Database } from '../types';

// ------------------------------------------------------------------
// CONFIGURATION: Connected to Project lckdatslaxgqtjsorhac
// ------------------------------------------------------------------
const SUPABASE_URL = 'https://lckdatslaxgqtjsorhac.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxja2RhdHNsYXhncXRqc29yaGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1ODM0NTIsImV4cCI6MjA4MTE1OTQ1Mn0.990ihjrqq5S_92sDp4iMys1BHuErihhEIQF1QUR35W8';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
