import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetail}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}