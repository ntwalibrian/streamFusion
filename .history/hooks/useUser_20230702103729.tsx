import { User } from "@supabase/auth-helpers-nextjs";
imp

type UserContextType ={
    accessToken: string | null;
    user: User | null
}