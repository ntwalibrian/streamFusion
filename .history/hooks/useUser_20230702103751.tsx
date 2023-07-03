import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, User}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}