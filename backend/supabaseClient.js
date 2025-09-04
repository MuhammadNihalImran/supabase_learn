import "dotenv/config";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPA_BASE_URL; // Dashboard se lo
const supabaseAnonKey = process.env.SUPA_BASE_ANON_KEY; // Dashboard se lo

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// @supabase/supabase-js ": "^2.57.0",
//     "body-parser": "^2.2.0",
//     "cors": "^2.8.5",
//     "dotenv": "^17.2.2",
//     "express": "^5.1.0",
//     "mysql2":
