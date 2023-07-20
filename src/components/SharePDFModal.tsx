import { toast } from "react-toastify";
import resumesService from "../services/resumes-service";
import { useState } from "react";

function SharePDFModal({id, onCloseModal}: {id: string, onCloseModal: () => void}) {
    const [email, setEmail] = useState<string>("");
    const [isSending, setIsSending] = useState<boolean>(false);

    const shareResume = async () => {
        try {
            setIsSending(true);
            if (email === "" || !email.includes("@")) {
                toast.error(`Please enter a valid email!`, {
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
                return;
            }

            await resumesService.shareResume(id, email);

            toast.success(`Resume shared successfully.`, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            onCloseModal();
            setIsSending(false);
        } catch (error) {
            setIsSending(false);
            toast.error(`An error occurred while sharing the resume.`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
      <>
        <div className="p-5">
          <h1 className="mb-5 text-xl text-bold">Share Resume</h1>
          <h2>Enter email to send to:</h2>
          <input
            className="mb-5 bg-gray-100 rounded"
            type="email"
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex pt-5">
            <button
              className="rounded p-2.5 mx-6 text-white hover:text-green-400 transition-all duration-150 hover:bg-gray-600 bg-gray-500"
              onClick={shareResume}
              disabled={isSending}
            >
              Send
            </button>
            <button
              className="p-2.5 text-white rounded hover:text-red-400 transition-all duration-150 hover:bg-gray-600 bg-gray-500 "
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
}

export default SharePDFModal;