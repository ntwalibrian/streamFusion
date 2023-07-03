import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails} from "@/types";

type UserContextType ={
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    
}