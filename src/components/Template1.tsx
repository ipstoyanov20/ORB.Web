import '../pages/styles/Template1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Template1() {

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
    ]/*relative grid place-items-center */
  };

  return (
    <div className="resume1-all-container">
      {/* <div className="resume1-left-button-container">
        <button onClick={() => window.location.href = 'http://localhost:5173/panel/templates'}> <FontAwesomeIcon className="mx-3" icon={faArrowLeft} /> </button>
      </div> */}
      <div className="resume1 ml-[20%]">
        <div className="resume1-container relative h-[95%]">
          <div className="col-container">
            <div className="strip1 col">
              <h1 className="section-title text-blue">{data.FullName}</h1>
              <div image-container>
                <img className="photo"
                  src={data.ImageUrl}
                  alt={data.FullName} />
              </div>
              <p className="text-green">{data.Summary}</p>
              <div className="contact-section about-me">
                <h1 className="section-title strip2 text-blue">About Me</h1>
                <div className="section-content">
                  <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Address: {data.Contacts.Address}</p>
                  <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Phone: {data.Contacts.PhoneNumber}</p>
                  <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Email: {data.Contacts.Email}</p>
                </div>
              </div>
            </div>
            <div className="lower-side col">
              <div className="education-section">
                <h1 className="section-title strip2 text-green">Education</h1>
                {data.Education.map(item => (
                  <div className="section-content">
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Institute: {item.SchoolName}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Degree: {item.Degree}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Field of Study: {item.FieldOfStudy}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Description: {item.Description}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Start Date: {item.StartDate}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />End Date: {item.EndDate}</p>
                  </div>
                ))}
              </div>
              <div className="experience-section">
                <h1 className="section-title strip2 text-green">Work Experience</h1>
                {data.Experience.map(item => (
                  <div className="section-content">
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Company: {item.CompanyName}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Position: {item.Position}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Description: {item.Description}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />Start Date: {item.StartDate}</p>
                    <p><FontAwesomeIcon className="mx-3" icon={faCaretRight} />End Date: {item.EndDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="resume1-right-button-container">
        <button onClick={() => window.location.href = 'http://localhost:5173/panel/templates/template2'}> <FontAwesomeIcon className="mx-3" icon={faArrowRight} /> </button>
      </div> */}
    </div>
  );
}

export default Template1