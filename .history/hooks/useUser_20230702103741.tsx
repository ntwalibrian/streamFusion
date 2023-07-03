import { User } from "@supabase/auth-helpers-nextjs";
import { Sub}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}