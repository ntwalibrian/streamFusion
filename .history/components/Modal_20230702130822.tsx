import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    t
}

const Modal = () => {
    return ( 
        <div>
            modal component 
        </div>
     );
}
 
export default Modal;