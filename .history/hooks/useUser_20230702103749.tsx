import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, U}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}