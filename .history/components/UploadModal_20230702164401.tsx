import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    return ( 
        <Modal 
         title="upload modal title"
         description="upload modal desc"
         isOpen={uploadModal}
         onChange={() => {}}>
            upload 
        </Modal>
     );
}
 
export default UploadModal;