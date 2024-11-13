import { useEffect, useState } from "react";
import supabase from "../supabase/SupabaseConfig";

export function useUser() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const getLoggedInUser = async () => {
        const { data } = await supabase.auth.getSession();
        const loggedInUser = data?.session?.user;
        setUser(loggedInUser);
      };
  
      getLoggedInUser();
  
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (_, session) => {
          setUser(session?.user || null);
        }
      );
  
      return () => {
        authListener?.subscription?.unsubscribe();
      };
    }, []);
  
    return user;
  }