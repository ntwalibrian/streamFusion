"use client";
import Modal from "./Modal"

const AuthModal = () => {
    return ( 
        <Modal
         title="welcome back"
         description="Login to your account"
         isOpen
         onChange={() => {}}>
            Auth modal 

        </Modal>
     );
}
 
export default AuthModal;