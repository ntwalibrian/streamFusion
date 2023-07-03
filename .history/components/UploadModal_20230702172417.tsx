import useUploadModal from "@/hooks/useUploadModal";
import { useState } from "react";
import {FieldValues, useForm, SubmitHandler} from "react-hook-form";
import Modal from "./Modal";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState();
    const uploadModal = useUploadModal();
    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    })

    const onChange = (open: boolean) => {
        if (!open) {
          reset();
          uploadModal.onClose();
        }
    }
    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //upload to supbase
    }

    return ( 
        <Modal 
         title="Add a song"
         description="Upload an mp3 file"
         isOpen={uploadModal.isOpen}
         onChange={onChange}>
            <form 
              onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                 id="title"
                 disabled={isLoading}
                 {...register('title', {required: true})}
                 place
                />
            </form>
        </Modal>
     );
}
 
export default UploadModal;