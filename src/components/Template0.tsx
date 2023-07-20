import '../pages/styles/Template0.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Template0() {

    const data = {
        "FullName": "First n Last name",
        "ImageUrl": "https://cdn.pixabay.com/photo/2023/01/28/22/09/ai-generated-7751805_1280.jpg",
        "Summary": "Lorem ipsum dolor sit amet consectetuer",
        "Contacts":
        {
            "Address": "Example address",
            "PhoneNumber": "0881234567",
            "Email": "info@info.com"
        }
        ,
        "Education": [
            {
                "SchoolName": "Street university",
                "Degree": "too good to be true",
                "FieldOfStudy": "Example field of study",
                "Description": "lorem ipsum",
                "StartDate": "69.06.2012",
                "EndDate": "42.07.2012"
            }
        ]
        ,
        "Experience": [
            {
                "CompanyName": "Example Inc.",
                "Position": "example",
                "Description": "lorem ipsum",
                "StartDate": "69.06.2012",
                "EndDate": "42.07.2012",
            }

        ]
    };

    return (
        <div className="resume0-all-container ">
            {/* <div className="resume0-left-button-container">
                <button onClick={() => window.location.href = 'http://localhost:5173/panel/templates/template2'}> <FontAwesomeIcon className="mx-3" icon={faArrowLeft} /> </button>
            </div> */}
            <div className="resume0 ml-[20%]">
                <div className="resume0-container h-[95%]">
                    <div className="dark-side">
                        <div className="image-container">
                            <img className="photo"
                                src={data.ImageUrl}
                                alt={data.FullName} />
                        </div>
                        <div>
                            <h1 className="section-title span-light text-dark">About me</h1>
                            <p>{data.Summary}</p>
                        </div>
                        <div className="contact-section">
                            <h1 className="section-title span-light text-dark">Contact</h1>
                            <p><FontAwesomeIcon className="mx-3" icon={faLocationDot} />Address: {data.Contacts.Address}</p>
                            <p><FontAwesomeIcon className="mx-3" icon={faPhone} />Phone: {data.Contacts.PhoneNumber}</p>
                            <p><FontAwesomeIcon className="mx-3" icon={faEnvelope} />Email: {data.Contacts.Email}</p>
                        </div>
                    </div>
                    <div className="light-side">
                        <h1 className="text-dark">{data.FullName}</h1>
                        <div className="education-section">
                            <h1 className="section-title span-dark">Education</h1>
                            {data.Education.map(item => (
                                <div className="section-content">
                                    <p><FontAwesomeIcon className="mx-3" icon={faGraduationCap} />Institute: {item.SchoolName}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faStar} />Degree: {item.Degree}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faBuildingColumns} />Field of Study: {item.FieldOfStudy}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faFile} />Description: {item.Description}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faHourglassStart} />Start Date: {item.StartDate}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faHourglassEnd} />End Date: {item.EndDate}</p>
                                </div>
                            ))}
                        </div>
                        <div className="experience-section">
                            <h1 className="section-title span-dark">Working Experience</h1>
                            {data.Experience.map(item => (
                                <div className="section-content">
                                    <p><FontAwesomeIcon className="mx-3" icon={faBriefcase} />Company: {item.CompanyName}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faUserTie} />Position: {item.Position}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faHourglassStart} />Start Date: {item.StartDate}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faHourglassEnd} />End Date: {item.EndDate}</p>
                                    <p><FontAwesomeIcon className="mx-3" icon={faFile} />Description: {item.Description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="resume0-right-button-container">
                <button className="rounded-button" onClick={() => window.location.href = 'http://localhost:5173/panel/templates/template1'}> <FontAwesomeIcon className="mx-3" icon={faArrowRight} /> </button>
            </div> */}
        </div>
    );
}

export default Template0;