import Modal from "./Modal";

const UploadModal = () => {
    return ( 
        <Modal 
         title="upload modal title"
         description="upload modal desc"
         isOpen
         onChange={()}>
            upload 
        </Modal>
     );
}
 
export default UploadModal;