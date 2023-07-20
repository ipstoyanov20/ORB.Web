import { AxiosResponse } from "axios";
import templatesService from "../services/templates-service";
import { TemplateVM } from "../api";
import { useEffect, useState } from "react";
import resumesService from "../services/resumes-service";
import { toast } from "react-toastify";

function CreateResumeModal({onCloseModal, onCreateResume}:{onCloseModal:() => void, onCreateResume: () => Promise<void>}) {

    const [templates, setTemplates] = useState<Array<TemplateVM>>([]);
    const [title, setTitle] = useState<string>("");
    const [templateId, setTemplateId] = useState<string>("");

    useEffect(() => {
            try {
                (async () => {
                    const response =
                        (await templatesService.makeGetTemplatesRequest()) as AxiosResponse<
                            TemplateVM[]
                        >;

                    setTemplates(response.data);
                    setTemplateId(response.data[0].id || "");
                })();
            } catch (error) {
                console.log(error);
            }
        }, []);
    
    const createResume = async () => {
        try {
            if (title === "" || templateId === "") {
                toast.error(`Please enter a title for the resume!`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                return;
            }

            await resumesService.makeNewResumeRequest(title, templateId);

            toast.success(`Resume created successfully.`, {
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
            await onCreateResume();
        } catch (error) {
            toast.error(`There was a error. Please try again later!`, {
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
    }


    return (
      <>
        <div className="p-5">
          <h1 className="mb-5 text-xl text-bold">Create Resume</h1>
          <h2>Enter title:</h2>
          <input
            className="mb-5 bg-gray-100 rounded"
            type="text"
            placeholder="Example title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <h2>Choose template:</h2>
          {templates.map((template, index) => {
            return (
              <>
                <button onClick={() => setTemplateId(template.id || "")} key={template.id} className="py-2 bg-gray-50 group">
                    <input
                      className="bg-gray-100"
                      type="radio"
                      name="template"
                      title="template"
                      value={template.id || ""}
                      defaultChecked={index === 0}
                      id={template.id?template.id:undefined}
                    />
                  <label htmlFor={template.id?template.id:undefined}>{" "+template.name}</label>
                </button>
              </>
            );
          })}
          <div className="flex pt-5">
            <button
              className="rounded p-2.5 mx-6 text-white hover:text-green-400 transition-all duration-150 hover:bg-gray-600 bg-gray-500"
              onClick={createResume}
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

export default CreateResumeModal;