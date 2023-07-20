import RelativeTime from "@yaireo/relative-time";
import { ResumeVM } from "../api";
import resumesService from "../services/resumes-service";
import { toast } from "react-toastify";

function ResumeElement({resume, onResumeDelete}:{resume: ResumeVM, onResumeDelete: () => Promise<void>}) {
    const lastModified = new Date(resume.lastModified);
    const offset = lastModified.getTimezoneOffset();
    const correctedLastModified = new Date(lastModified.getTime() - offset * 60 * 1000);
    const relativeTime = new RelativeTime().from(Date.parse(correctedLastModified));


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
        <tr>
            <td className="p-2">{resume.title}</td>
            {(resume.lastModified == resume.creationTime) ? (
                <td>Created {relativeTime}</td>
            ) : (
                <td>Last modified: {relativeTime}</td>
            )}
        

            <td className="flex justify-end rounded-md h-[90%] w-[90%]">
                <button onClick={deleteResume} className="border-gray-700 hover:bg-red-700 hover:text-white rounded text-black ">Delete</button>
            </td>
        </tr>
    )
}

export default ResumeElement