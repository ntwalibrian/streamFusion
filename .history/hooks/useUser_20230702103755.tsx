import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDe}

type UserContextType ={
    accessToken: string | null;
    user: User | null
}