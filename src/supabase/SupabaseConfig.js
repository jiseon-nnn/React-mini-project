//url, apikey 설정

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://thutxgssfbcsfmpfjgyb.supabase.co";
const supabaseAPIkey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodXR4Z3NzZmJjc2ZtcGZqZ3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3OTQxNjYsImV4cCI6MjA0NjM3MDE2Nn0.CNZsOu9AZmOSyYsyOrNroahp5LaPgMFp2h0EXqPaFPA";

const supabase = createClient(supabaseUrl, supabaseAPIkey)

export default supabase