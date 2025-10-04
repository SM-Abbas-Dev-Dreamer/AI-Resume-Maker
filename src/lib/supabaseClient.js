import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co"
const supabaseAnonKey = "YOUR_ANON_KEY" // ye tumhe Supabase dashboard → API section me milega

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
