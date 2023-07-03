import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
          reset();
          uploadModal.onClose();
        }
      }
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