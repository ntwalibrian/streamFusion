import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription,}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}