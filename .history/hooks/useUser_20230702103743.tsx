import { User } from "@supabase/auth-helpers-nextjs";
import { Subscript}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}