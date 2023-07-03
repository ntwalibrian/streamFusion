"use client";
import {
    useSessionContext,
    useSupabaseClient
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
import {Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    return ( 
        <Modal
         title="welcome back"
         description="Login to your account"
         isOpen
         onChange={() => {}}>
            <Auth 
             supabaseClient={supabaseClient}
             appearance={{
                theme: ThemeSupa
                variebles: {
                    
                }
             }}/>

        </Modal>
     );
}
 
export default AuthModal;