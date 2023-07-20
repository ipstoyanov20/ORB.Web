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
            <div className="p-5">
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Photo</label>
                    <input className="form-control" type="file" id="formFile"  onChange={(e) => setFile(e.target.files?.[0] || null)} accept="image/*" multiple={false} />
                </div>
                <button className="btn btn-primary" onClick={uploadPhoto} disabled={isSending}>Upload</button>
                <button className="btn btn-secondary" onClick={onCloseModal} disabled={isSending}>Cancel</button>
            </div>
        </>
    );
}
export default UploadPhotoComponent;