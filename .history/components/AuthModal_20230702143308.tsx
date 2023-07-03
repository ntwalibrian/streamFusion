"use client";
import {
    useSessionContext,
    useSupabaseClient
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
import 

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
            <Auth/>

        </Modal>
     );
}
 
export default AuthModal;