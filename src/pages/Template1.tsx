import './Template1.css';

export const Template1: React.FC = () => {
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
        <div className="resume1 ml-[20%]">
            <div className="resume1-container">
                <div className="header">
                    <div className="name_container">
                        <h1 className="">{data.FullName}</h1>
                            //position ;;                    
                    </div>
                </div>
                <div className="left-col">
                    <div className="image-container">
                        <img className="photo"
                            src={data.ImageUrl}
                            alt={data.FullName} />
                    </div>
                </div>
                <div className="contact-section">
                    <h2 className="section-title">Hello!</h2>
                        <p>{data.Summary}</p>
                    <h2 className="section-title">Contact Details</h2>
                    <div className="section-content">
                        <p>Address: {data.Contacts.Address}</p>
                        <p>Phone: {data.Contacts.PhoneNumber}</p>
                        <p>Email: {data.Contacts.Email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}