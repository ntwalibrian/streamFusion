import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    return ( 
        <Modal 
         title="upload modal title"
         description="upload modal desc"
         isOpen={uploadModal.isOpen}
         onChange={() => {}}>
            upload 
        </Modal>
     );
}
 
export default UploadModal;