import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails} from ""

type UserContextType ={
    accessToken: string | null;
    user: User | null
}