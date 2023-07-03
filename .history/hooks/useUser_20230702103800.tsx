import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails} 

type UserContextType ={
    accessToken: string | null;
    user: User | null
}