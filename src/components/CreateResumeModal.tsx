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
        <h1 className="text-xl text-bold">Create Resume</h1>
        <h2>Enter title:</h2>
        {/* tva ne e li mn tumno */}
        <input className="rounded bg-gray-100" type="text" placeholder="Example title" onChange={(e) => setTitle(e.target.value)}/>
        <h2>Choose template:</h2>
        {templates.map((template, index) => {
            return (
                <div key={template.id}>
                    <input
                        type="radio"
                        name="template"
                        value={template.id || ""}
                        defaultChecked={index === 0}
                        onClick={() => setTemplateId(template.id || "")}
                    />
                    <label>{template.name}</label>
                </div>
            );
        })}
        <div className="flex ">
          <button onClick={createResume}>Create</button>
          <button onClick={onCloseModal}>Cancel</button>
        </div>
      </>
    );
}

export default CreateResumeModal;