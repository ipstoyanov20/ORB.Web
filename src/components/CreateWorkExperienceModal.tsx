import { useState } from "react";
import workExperienceService from "../services/work-experience-service";
import { toast } from "react-toastify";

function CreateWorkExperienceModal({resumeId, onCloseModal}:{resumeId: string, onCloseModal: () => Promise<void>}) {
    const [isSending, setIsSending] = useState(false);
    const [companyName, setCompanyName] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [startData, setStartData] = useState<string>("");
    const [endData, setEndData] = useState<string>("");

    const createWorkExperience = async () => {
        try {
            setIsSending(true);

            if (companyName === "" || position === "" || description === "" || startData === "") {
                toast.error(`Please enter all fields!`, {
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

            await workExperienceService.makeNewWorkExperienceRequest(resumeId, companyName, position, description, startData, endData ? startData : null);

            toast.success(`Work Experience created successfully.`, {
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
            setIsSending(false);
            if (error.response.data.errors[Object.keys(error.response?.data.errors)[0]]) {
                toast.error(
                  `${
                    error.response.data.errors[
                      Object.keys(error.response?.data.errors)[0]
                    ]
                  }`,
                  {
                    position: "bottom-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  }
                );
              } else {
                toast.error(
                  `An error occurred while creating the work experience.`,
                  {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  }
                );
            }   
        }
    }

    return (
        <>
        <div className="p-5">
          <h1 className="mb-5 text-xl text-bold">Create Work Experience</h1>
          <h2>Enter Company name:</h2>
          <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
            <h2>Enter Position:</h2>
            <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example position"
            onChange={(e) => setPosition(e.target.value)}
            />
            <h2>Enter Description:</h2>
            <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example description"
            onChange={(e) => setDescription(e.target.value)}
            />
            <h2>Enter Start Date:</h2>
            <input
            className="mb-5 bg-gray-100 rounded"
            type="date"
            onChange={(e) => setStartData(e.target.value)}
            />
            <h2>Enter End Date:</h2>
            <input
            className="mb-5 bg-gray-100 rounded"
            type="date"
            onChange={(e) => setEndData(e.target.value)}
            />
          <div className="flex pt-5">
            <button
              className="rounded p-2.5 mx-6 text-white hover:text-green-400 transition-all duration-150 hover:bg-gray-600 bg-gray-500"
              onClick={createWorkExperience}
              disabled={isSending}
            >
              Create
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
    )
}

export default CreateWorkExperienceModal;