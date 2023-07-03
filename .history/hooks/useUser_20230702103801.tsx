import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails} f

type UserContextType ={
    accessToken: string | null;
    user: User | null
}