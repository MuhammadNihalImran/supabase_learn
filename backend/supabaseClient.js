import "dotenv/config";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPA_BASE_URL; // Dashboard se lo
const supabaseAnonKey = process.env.SUPA_BASE_ANON_KEY; // Dashboard se lo

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


