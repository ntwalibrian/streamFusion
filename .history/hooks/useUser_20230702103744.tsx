import { User } from "@supabase/auth-helpers-nextjs";
import { Subscriptio}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}