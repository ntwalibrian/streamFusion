import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
          // reset form
          uploadModal.onClose();
        }
      }
    return ( 
        <Modal 
         title="Add a song"
         description="Upload an mp3 fil"
         isOpen={uploadModal.isOpen}
         onChange={onChange}>
            upload 
        </Modal>
     );
}
 
export default UploadModal;