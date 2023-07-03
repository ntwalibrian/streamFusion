import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, Use}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}