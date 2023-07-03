"use client";
import Modal from "./Modal"

const AuthModal = () => {
    const supabaseClient = useSupaba
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