import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails} from "@/ty"

type UserContextType ={
    accessToken: string | null;
    user: User | null
}