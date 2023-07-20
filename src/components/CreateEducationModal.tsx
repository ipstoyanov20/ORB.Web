import { useState } from "react";
import { toast } from "react-toastify";
import educationsService from "../services/educations-service";

function CreateEducationModal({resumeId, onCloseModal}:{resumeId: string, onCloseModal: () => Promise<void>}) {
    const [isSending, setIsSending] = useState(false);
    const [schoolName, setSchoolName] = useState<string>("");
    const [degree, setDegree] = useState<string>("");
    const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [startData, setStartData] = useState<string>("");
    const [endData, setEndData] = useState<string>("");

    const createEducation = async () => {
        try {
            setIsSending(true);

            if (schoolName === "" || degree === "" || fieldOfStudy === "" || description === "" || startData === "") {
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

            await educationsService.makePostEducationRequest(resumeId, schoolName, degree, fieldOfStudy, description, startData, endData ? endData : null);

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
                  `An error occurred while creating the education.`,
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
          <h2>Enter School name:</h2>
          <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example company name"
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <h2>Enter Degree:</h2>
          <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example degree"
            onChange={(e) => setDegree(e.target.value)}
          />
          <h2>Enter Field of study:</h2>
          <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example field of study"
            onChange={(e) => setFieldOfStudy(e.target.value)}
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
              onClick={createEducation}
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
    );
}

export default CreateEducationModal;