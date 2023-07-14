import './Templates.css';
export const Templates: React.FC = () => {


    const data = {
        "name": "FIRST LAST",
        "pictureUrl": "https://cdn.pixabay.com/photo/2023/01/28/22/09/ai-generated-7751805_1280.jpg",
        "contacts":
        {
            "phone": "0881234567",
            "email": "info@info.com",
            "address": "at ur mum's"
        }
        ,
        "education": [
            {
                "institute": "Street university",
                "degree": "too good to be true",
                "field_of_study": "ur mom's bed",
                "start_date": "69.06.2012",
                "end_date": "42.07.2012"
            }
        ]
    };

    return (
        <div className="resume">
            <div className="resume-container">
                <div className="black-side">
                    <div className="image-container">
                        <img className="photo"
                            src={data.pictureUrl}
                            alt={data.name} />
                    </div>
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>Phone: {data.contacts.phone}</p>
                        <p>Email: {data.contacts.email}</p>
                        <p>Address: {data.contacts.address}</p>
                    </div>
                    <div className="education-section">
                        <h1 className="section-title">Education</h1>
                        {data.education.map(item => (
                            <div className="section-content">
                                <p>Institute: {item.institute}</p>
                                <p>Degree: {item.degree}</p>
                                <p>Field of Study: {item.field_of_study}</p>
                                <p>Date: {item.start_date}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="white-side">
                    <h1 className="text-black">{data.name}</h1>
                    
                </div>
            </div>
        </div>
    );

}