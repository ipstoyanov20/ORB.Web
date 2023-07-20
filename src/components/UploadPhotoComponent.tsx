import { useState } from "react";
import personalInfoService from "../services/personalInfo-service";
import { PersonalInfoVM } from "../api";
import { toast } from "react-toastify";

function UploadPhotoComponent({personalInfoVM, onCloseModal}:{personalInfoVM: PersonalInfoVM, onCloseModal: () => Promise<void>}) {
    const [isSending, setIsSending] = useState(false);
    const [file, setFile] = useState<Blob | null>(null);

    const uploadPhoto = async () => {
        try {
            setIsSending(true);

            toast.success(`Photo is being uploaded.`, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            await personalInfoService.makePutPersonalInfoRequestWithFile(
              personalInfoVM.id || "",
              personalInfoVM.fullName || "",
              personalInfoVM.address || "",
              personalInfoVM.phoneNumber || "",
              personalInfoVM.email || "",
              personalInfoVM.summary || "",
              file
            );

            toast.success(`Photo uploaded successfully.`, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setIsSending(false);
            await onCloseModal();
        } catch (error) {
          toast.error(`An error occurred while uploading the photo.`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          setIsSending(false);
        }
    }
    return (
        <>
            <div className="m-5">
                <div className="text-center ">
                    <label htmlFor="formFile" className="form-label">Upload Photo</label><br></br>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <input className="form-control" type="file" id="formFile"  onChange={(e) => setFile(e.target.files?.[0] || null)} accept="image/*" multiple={false} />
                </div>
                <div className="flex items-center justify-center">
                    <button className="rounded p-2.5 mx-3 text-white hover:text-green-400 transition-all duration-150 hover:bg-gray-600 bg-gray-500 btn btn-primary" onClick={uploadPhoto} disabled={isSending}>Upload</button>
                    <button className="p-2.5 mx-3 text-white rounded hover:text-red-400 transition-all duration-150 hover:bg-gray-600 bg-gray-500  btn btn-secondary" onClick={onCloseModal} disabled={isSending}>Cancel</button>
                </div>
            </div>
        </>
    );
}
export default UploadPhotoComponent;