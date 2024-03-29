import useUploadModal from "@/hooks/useUploadModal";
import { toast } from "react-hot-toast";
import { useState } from "react";
import {FieldValues, useForm, SubmitHandler} from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";


const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        try {
            setIsLoading(true);
        }  catch (error) {
            toast.error("something went wrong")
        }  finally{
            set
        }
    } 

    return ( 
        <Modal 
         title="Add a song"
         description="Upload an mp3 file"
         isOpen={uploadModal.isOpen}
         onChange={onChange}>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4"
            >
                <Input
                 id="title"
                 disabled={isLoading}
                 {...register('title', {required: true})}
                 placeholder="Song title"
                />
                <Input
                 id="author"
                 disabled={isLoading}
                 {...register('author', {required: true})}
                 placeholder="Song author"
                />
                <div>
                    <div className="pb-1">
                        Select a song file 
                    </div>
                    <Input
                     id="song"
                     type="file"
                     disabled={isLoading}
                     accept=".mp3"
                     {...register('song', {required: true})}
                    />
                </div>
                <div>
                    <div className="pb-1">
                        Select a image file 
                    </div>
                    <Input
                     id="image"
                     type="file"
                     disabled={isLoading}
                     accept="image/*"
                     {...register('image', {required: true})}
                    />
                </div>
                <Button disabled={isLoading} type="submit">
                    Create
                </Button>
            </form>
        </Modal>
     );
}
 
export default UploadModal;