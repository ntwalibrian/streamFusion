"use client";
import { useRouter } from "next/navigation";
import Modal from "./Modal"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    
    return ( 
        <Modal
         title="welcome back"
         description="Login to your account"
         isOpen
         onChange={() => {}}>
            Auth modal choi

        </Modal>
     );
}
 
export default AuthModal;