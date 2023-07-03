import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails} fro

type UserContextType ={
    accessToken: string | null;
    user: User | null
}