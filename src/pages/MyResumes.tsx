import { useEffect, useState } from "react";
import resumesService from "../services/resumes-service";
import { ResumeVM } from "../api";
import { AxiosResponse } from "axios";
import ResumeElement from "../components/ResumeElement";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
import CreateResumeModal from "../components/CreateResumeModal";
import ReactModal from "react-modal";

Modal.setAppElement('#root');

export const MyResumes: React.FC = () => {
  const [resumeRows, setResumeRows] = useState(5);
  const [resumes, setResumes] = useState<Array<ResumeVM>>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        const response =
          (await resumesService.makeGetResumesRequest()) as AxiosResponse<
            ResumeVM[]
          >;

        response.data.sort((a, b) => {
          return Date.parse(b.lastModified) - Date.parse(a.lastModified);
        });

        setResumeRows(response.data.length);
        setResumes(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const refreshResumes = async () => {
    try {
      (async () => {
        const response =
          (await resumesService.makeGetResumesRequest()) as AxiosResponse<
            ResumeVM[]
          >;

        response.data.sort((a, b) => {
          return Date.parse(b.lastModified) - Date.parse(a.lastModified);
        });

        setResumeRows(response.data.length);
        setResumes(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            zIndex: 10,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <CreateResumeModal onCloseModal={() => setIsOpen(!isOpen)} onCreateResume={refreshResumes}/>
      </ReactModal>
      <div className="text-black z-1 absolute w-[90%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[80%] h-[50%] group z-10 relative rounded-md shadow-xl bg-[#ffffff]">
          <h1 className="font-bold p-5 text-2xl text-left text-gray-500 absolute top-[-15%] left-0">
            My Resumes
          </h1>
          <hr className="bg-gray-500 w-[20%] h-1 group-hover:w-[100%] transition-all duration-500" />

          <button className="absolute right-0 z-20 p-2 m-4 bg-gray-600 rounded hover:bg-gray-700">
            <div className="text-white " onClick={() => setIsOpen(!isOpen)}>
              Create Resume
            </div>
          </button>

          <div className="absolute w-[100%] h-[100%] grid place-items-center">
            <div
              className={`w-[90%] h-[60%] bg-gray-100 place-self-center grid-rows-${resumeRows} rounded-md overflow-y-scroll p-5`}
            >
              <table className="bg-gray-100 text-left relative table-fixed w-[100%]">
                <tbody >
                  {resumes.map((resume) => (
                    <>
                      <ResumeElement
                        key={resume.id}
                        resume={resume}
                        onResumeDelete={refreshResumes}
                      />
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
