"use client";
import Modal from "./Modal"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = use
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