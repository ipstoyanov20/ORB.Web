import RelativeTime from "@yaireo/relative-time";
import { ResumeVM } from "../api";
import resumesService from "../services/resumes-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ResumeElement({resume, onResumeDelete}:{resume: ResumeVM, onResumeDelete: () => Promise<void>}) {
    const lastModified = new Date(resume.lastModified);
    const offset = lastModified.getTimezoneOffset();
    const correctedLastModified = new Date(lastModified.getTime() - offset * 60 * 1000);
    const relativeTime = new RelativeTime().from(Date.parse(correctedLastModified));
    const navigator = useNavigate();

    const deleteResume = async () => {
        try {
            await resumesService.makeDeleteResumeRequest(resume.id);

            toast.success("Resume deleted successfully", {
              position: "bottom-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

            await onResumeDelete();

        } catch (error) {
            toast.error("Error deleting resume. Please try again later.", {
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
        <tr  onClick={() => navigator(`/panel/resumes/${resume.id}`)} className="transition-all duration-150 bg-gray-300 rounded-md hover:bg-gray-400 hover:text-white">
            <td className="p-5">{resume.title}</td>
            {(resume.lastModified == resume.creationTime) ? (
                <td>Created {relativeTime}</td>
            ) : (
                <td>Last modified: {relativeTime}</td>
            )}
        

            <td className="flex justify-end mt-2.5 rounded-md h-[100%] w-[90%]">
                <button onClick={deleteResume} className="text-black transition-all duration-150 bg-gray-100 border-gray-700 rounded hover:bg-red-700 hover:text-white">Delete</button>
            </td>
        </tr>
    )
}

export default ResumeElement