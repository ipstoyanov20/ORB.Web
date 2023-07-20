import '../pages/styles/Template2.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Template2() {

    const data = {
        "FullName": "Lorem Ipsum",
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
        <div className="resume2-all-container">
            {/* <div className="resume2-left-button-container">
                <button onClick={() => window.location.href = 'http://localhost:5173/panel/templates/template1'}> <FontAwesomeIcon className="mx-3" icon={faArrowLeft} /> </button>
            </div> */}
            <div className="resume2 ml-[20%] relative">
                <div className="resume2-container h-[95%]">
                    <div className="header ">
                        <div className="image-container">
                            <img className="photo"
                                src={data.ImageUrl}
                                alt={data.FullName} />
                        </div>
                        <h1 className="content-title">{data.FullName}</h1>
                        <div className="contact-section">
                            <span>Email: </span>
                            <span className="text-purple">{data.Contacts.Email}</span>
                            <span className="separator"></span>
                            <span>Phone Number: </span>
                            <span className="text-purple">{data.Contacts.PhoneNumber}</span>
                            <span className="separator"></span>
                            <span>Address: </span>
                            <span className="text-purple">{data.Contacts.Address}</span>
                        </div>
                        <div className="about-me">
                            <p className="text-underlined">{data.Summary}</p>
                        </div>
                    </div>
                    <div className="experience-section">
                        <h1 className="section-title"><FontAwesomeIcon className="mx-3" icon={faBriefcase} />Working Experience</h1>
                        {data.Experience.map(item => (
                            <div className="section-content">
                                <p>Company: <span className="text-purple">{item.CompanyName}</span></p>
                                <p>Position: <span className="text-purple">{item.Position}</span></p>
                                <p>Start Date: <span className="text-purple">{item.StartDate}</span></p>
                                <p>End Date: <span className="text-purple">{item.EndDate}</span></p>
                                <p>Description: <span className="text-purple">{item.Description}</span></p>
                            </div>
                        ))}
                    </div>
                    <div className="education-section">
                        <h1 className="section-title"><FontAwesomeIcon className="mx-3" icon={faUserGraduate} />Education</h1>
                        {data.Education.map(item => (
                            <div className="section-content">
                                <p>Institute: <span className="text-purple">{item.SchoolName}</span></p>
                                <p>Degree: <span className="text-purple">{item.Degree}</span></p>
                                <p>Field of Study: <span className="text-purple">{item.FieldOfStudy}</span></p>
                                <p>Description: <span className="text-purple">{item.Description}</span></p>
                                <p>Start Date: <span className="text-purple">{item.StartDate}</span></p>
                                <p>End Date: <span className="text-purple">{item.EndDate}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="resume2-right-button-container">
                <button onClick={() => window.location.href = 'http://localhost:5173/panel/templates'}> <FontAwesomeIcon className="mx-3" icon={faArrowRight} /> </button>
            </div> */}
        </div>
    );
}

export default Template2;