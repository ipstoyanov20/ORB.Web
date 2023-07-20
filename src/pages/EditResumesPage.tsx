import { useNavigate, useParams } from "react-router-dom";
import {
  EducationVM,
  PersonalInfoVM,
  ResumeVM,
  TemplateVM,
  WorkExperienceVM,
} from "../api";
import { AxiosResponse } from "axios";
import resumesService from "../services/resumes-service";
import { useEffect, useRef, useState } from "react";
import personalInfoService from "../services/personalInfo-service";
import templatesService from "../services/templates-service";
import Handlebars from "handlebars";
import {debounce} from "lodash";
import educationsService from "../services/educations-service";
import workExperienceService from "../services/work-experience-service";
import { ToastContainer, toast } from "react-toastify";
import { saveAs } from 'file-saver';
import ReactModal from "react-modal";
import SharePDFModal from "../components/SharePDFModal";
import CreateWorkExperienceModal from "../components/CreateWorkExperienceModal";
import CreateEducationModal from "../components/CreateEducationModal";
import UploadPhotoComponent from "../components/UploadPhotoComponent";

interface UserData {
  FullName: string;
  ImageUrl: string;
  Summary: string;
  Contacts: {
    Address: string;
    PhoneNumber: string;
    Email: string;
  };
  Education: Array<{
    Id: string;
    SchoolName: string;
    Degree: string;
    FieldOfStudy: string;
    StartDate: string;
    EndDate: string | null;
    Description: string;
  }>;
  Experience: Array<{
    Id: string;
    CompanyName: string;
    Position: string;
    StartDate: string;
    EndDate: string | null;
    Description: string;
  }>;
}

export const Resumes = () => {
  const [resume, setResume] = useState<ResumeVM | null>(null);
  const [templateContent, setTemplateContent] = useState<string>("");
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoVM | null>(null);
  const [education, setEducation] = useState<Array<EducationVM> | null>(null);
  const [workExperience, setWorkExperience] =
    useState<Array<WorkExperienceVM> | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [templates, setTemplates] = useState<Array<TemplateVM>>([]);

  const [isOpenShareModal, setIsOpenShareModal] = useState<boolean>(false);
  const [isOpenChangePhotoModal, setIsOpenChangePhotoModal] =
    useState<boolean>(false);
  const [isOpenWorkExperienceModal, setIsOpenWorkExperienceModal] =
    useState<boolean>(false);
  const [isOpenEducationModal, setIsOpenEducationModal] =
    useState<boolean>(false);

  const navigator = useNavigate();
  const id = useParams().id;
  const templateRef = useRef<HandlebarsTemplateDelegate>(
    Handlebars.compile("")
  );

  useEffect(() => {
    try {
      (async () => {
        await UpdateResume();
      })();
    } catch (error) {
      console.log(error);
      navigator("/panel/myresumes");
    }
  }, []);

  useEffect(() => {
    (async () => {
      const response = await templatesService.makeGetTemplateFromIdRequest(
        resume?.templateId || "") as AxiosResponse<TemplateVM>;

      setTemplateContent(response.data.content || "");
      templateRef.current = Handlebars.compile(response.data.content || "");
    })();

  } , [resume?.templateId, templateContent]);

  useEffect(() => {
    const debouncedUpdate = debounce(async () => {
      try {
        if (!userData) {
          return;
        }

        await personalInfoService.makePutPersonalInfoRequest(
          resume?.personalInfoId || "",
          userData.FullName,
          userData.Contacts.Address,
          userData.Contacts.PhoneNumber,
          userData.Contacts.Email,
          userData.Summary,
        );

        await resumesService.makeUpdateResumeFromIdRequest(
          resume?.id || "",
          resume?.title || "",
          resume?.templateId || ""
        );

        for (const element of userData?.Education || []) {
          await educationsService.makePutEducationRequest(
            element.Id,
            element.SchoolName,
            element.Degree,
            element.FieldOfStudy,
            element.Description,
            new Date(element.StartDate).toISOString().substring(0, 10),
            element.EndDate ? new Date(element.EndDate).toISOString().substring(0, 10) : null
          );
        }
        
        for (const element of userData?.Experience || []) {
          await workExperienceService.makeUpdateWorkExperienceFromIdRequest(
            element.Id,
            element.CompanyName,
            element.Position,
            element.Description,
            new Date(element.StartDate).toISOString().substring(0, 10),
            element.EndDate ? new Date(element.EndDate).toISOString().substring(0, 10) : null
          );
        }

        toast.success(`Resume updated successfully.`, {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
      } catch (error) {
        if (error.response.data.errors[Object.keys(error.response?.data.errors)[0]]) {
          toast.error(`${error.response.data.errors[Object.keys(error.response?.data.errors)[0]]}`, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error(`Error updating resume.`, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }, 1000);

    debouncedUpdate();

    return () => {
      debouncedUpdate.cancel();
    };
  }, [resume?.templateId, resume?.title, userData]);
  

  const UpdateResume = async () => {
    try {
      const templatesResponse =
        (await templatesService.makeGetTemplatesRequest()) as AxiosResponse<
          TemplateVM[]
        >;

      setTemplates(templatesResponse.data);

      const response = (await resumesService.makeGetResumeFromIdRequest(
        id || ""
      )) as AxiosResponse<ResumeVM>;

      setResume(response.data);

      const templateResponse =
        (await templatesService.makeGetTemplateFromIdRequest(
          response.data.templateId || ""
        )) as AxiosResponse<TemplateVM>;

      setTemplateContent(templateResponse.data.content || "");
      //setTemplate(Handlebars.compile(templateResponse.data.content || ""));
      templateRef.current = Handlebars.compile(
        templateResponse.data.content || ""
      );
      const personalInfoResponse =
        (await personalInfoService.makeGetPersonalInfoRequest(
          response.data.personalInfoId || ""
        )) as AxiosResponse<PersonalInfoVM>;

      setPersonalInfo(personalInfoResponse.data);

      const educationResponse =
        (await resumesService.makeGetEducationsFromResumeIdRequest(
          response.data.id || ""
        )) as AxiosResponse<Array<EducationVM>>;

      setEducation(educationResponse.data);

      const workExperienceResponse =
        (await resumesService.makeGetWorkExperienceFromResumeIdRequest(
          response.data.id || ""
        )) as AxiosResponse<Array<WorkExperienceVM>>;

      setWorkExperience(workExperienceResponse.data);

      setUserData({
        FullName: personalInfoResponse.data.fullName,
        ImageUrl: personalInfoResponse.data.personImageURL,
        Summary: personalInfoResponse.data.summary,
        Contacts: {
          Address: personalInfoResponse.data.address,
          PhoneNumber: personalInfoResponse.data.phoneNumber,
          Email: personalInfoResponse.data.email,
        },
        Education: educationResponse.data.map((education) => {
          return {
            Id: education.id,
            SchoolName: education.schoolName,
            Degree: education.degree,
            FieldOfStudy: education.fieldOfStudy,
            StartDate: new Date(
              Date.parse(education.startDate)
            ).toLocaleDateString(),
            EndDate: education.endDate
              ? new Date(Date.parse(education.endDate)).toLocaleDateString()
              : null,
            Description: education.description,
          };
        }),
        Experience: workExperienceResponse.data.map((workExperience) => {
          return {
            Id: workExperience.id,
            CompanyName: workExperience.companyName,
            Position: workExperience.position,
            StartDate: new Date(
              Date.parse(workExperience.startDate)
            ).toLocaleDateString(),
            EndDate: workExperience.endDate
              ? new Date(
                  Date.parse(workExperience.endDate)
                ).toLocaleDateString()
              : null,
            Description: workExperience.description,
          };
        }),
      } as UserData);
    } catch (error) {
      console.log(error);
      navigator("/panel/myresumes");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setUserData((userData: UserData | null) => {
      if (!userData) {
        return null;
      }

      return {
        ...userData,
        Contacts: {
          ...userData.Contacts,
          [name]: value,
        },
        [name]: value,
      };
    });
  };

  const handleWorkExperienceChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = event.target;

    setUserData((userData: UserData | null) => {
      if (!userData) {
        return null;
      }

      return {
        ...userData,
        Experience: userData.Experience.map((workExp, i) =>
          i === index ? { ...workExp, [name]: value } : workExp
        ),
      };
    });
  };

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = event.target;

    setUserData((userData: UserData | null) => {
      if (!userData) {
        return null;
      }

      return {
        ...userData,
        Education: userData.Education.map((education, i) => 
          i === index ? { ...education, [name]: value } : education
        ),
      };
    });
  };
  const b64toBlob = async (base64: string, type = 'application/octet-stream') => 
    fetch(`data:${type};base64,${base64}`).then(res => res.blob())

  return (
    <>
      <ReactModal
        isOpen={isOpenShareModal}
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
        <SharePDFModal
          onCloseModal={() => setIsOpenShareModal(!isOpenShareModal)}
          id={resume?.id || ""}
        />
      </ReactModal>
      <ReactModal
        isOpen={isOpenWorkExperienceModal}
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
        <CreateWorkExperienceModal
          onCloseModal={async () => {
            setIsOpenWorkExperienceModal(!isOpenWorkExperienceModal);
            await UpdateResume();
          }}
          resumeId={resume?.id || ""}
        />
      </ReactModal>
      <ReactModal
        isOpen={isOpenEducationModal}
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
        <CreateEducationModal
          onCloseModal={async () => {
            setIsOpenEducationModal(!isOpenEducationModal);
            await UpdateResume();
          }}
          resumeId={resume?.id || ""}
        />
      </ReactModal>
      <ReactModal
        isOpen={isOpenChangePhotoModal}
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
        <UploadPhotoComponent
          onCloseModal={async () => {
            setIsOpenChangePhotoModal(!isOpenChangePhotoModal);
            await UpdateResume();
          }}
          personalInfoVM={personalInfo || ({} as PersonalInfoVM)}
        />
      </ReactModal>
      <div className="flex flex-row space-x-4">
        <div className="w-[100%]">
          <h2>You are editing: {resume?.title}</h2>
          <div className="flex flex-row justify-between my-4">
            <select
              className="w-[200px]"
              value={resume?.templateId}
              onChange={(event) => {
                setResume((resume) => {
                  if (!resume) {
                    return null;
                  }

                  return {
                    ...resume,
                    templateId: event.target.value,
                  };
                });
              }}
            >
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
            <button
              onClick={async () => {
                try {
                  toast.success(
                    `Your resume is being generated. Please wait!`,
                    {
                      position: "bottom-center",
                      autoClose: 2500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    }
                  );

                  const response = await resumesService.downloadResumeAsPdf(
                    resume?.id || ""
                  );

                  const pdfBlob = new Blob([await b64toBlob(response.data)], {
                    type: '"application/pdf"',
                  });
                  saveAs(pdfBlob, `${resume?.title}.pdf`);

                  toast.success(`Resume downloaded successfully!`, {
                    position: "bottom-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                } catch (error) {
                  toast.error(
                    `Error downloading resume. Please try again later!`,
                    {
                      position: "bottom-center",
                      autoClose: 2500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    }
                  );
                }
              }}
            >
              Download as PDF
            </button>
            <button
              onClick={() => {
                setIsOpenShareModal(!isOpenShareModal);
              }}
            >
              Share as PDF
            </button>
          </div>
          <hr />
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <div className="flex flex-col text-left">
                <label htmlFor="FullName">Full names:</label>
                <input
                  title="Full name"
                  type="text"
                  name="FullName"
                  value={userData?.FullName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="Address">Address:</label>
                <input
                  title="Address"
                  type="text"
                  name="Address"
                  value={userData?.Contacts.Address}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={() =>
                  setIsOpenChangePhotoModal(!isOpenChangePhotoModal)
                }
              >
                Update photo
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col text-left">
                <label>Email:</label>
                <input
                  type="email"
                  name="Email"
                  value={userData?.Contacts.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-left">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={userData?.Contacts.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <label className="w-full">Summary:</label>
              <textarea
                name="Summary"
                value={userData?.Summary}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start">
              <h2>Work Experience:</h2>
            </div>
            <button
              onClick={() =>
                setIsOpenWorkExperienceModal(!isOpenWorkExperienceModal)
              }
            >
              Add more work experiences
            </button>
            {userData?.Experience.map((workExp, index) => (
              <div key={workExp.Id} className="space-y-4">
                <div className="flex justify-between">
                  <div className="flex flex-col text-left">
                    <label>Company:</label>
                    <input
                      type="text"
                      name="CompanyName"
                      value={workExp.CompanyName}
                      onChange={(event) =>
                        handleWorkExperienceChange(event, index)
                      }
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label>Position:</label>
                    <input
                      type="text"
                      name="Position"
                      value={workExp.Position}
                      onChange={(event) =>
                        handleWorkExperienceChange(event, index)
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col text-left">
                    <label>Start date:</label>
                    <input
                      type="date"
                      name="StartDate"
                      value={new Date(Date.parse(workExp.StartDate))
                        .toISOString()
                        .substring(0, 10)}
                      onChange={(event) =>
                        handleWorkExperienceChange(event, index)
                      }
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label>End date:</label>
                    <input
                      type="date"
                      name="EndDate"
                      value={
                        workExp.EndDate
                          ? new Date(Date.parse(workExp.EndDate))
                              .toISOString()
                              .substring(0, 10)
                          : ""
                      }
                      onChange={(event) =>
                        handleWorkExperienceChange(event, index)
                      }
                    />
                  </div>
                </div>
                <label className="flex flex-col text-left">
                  Description:
                  <textarea
                    name="Description"
                    value={workExp.Description}
                    onChange={(event) =>
                      handleWorkExperienceChange(event, index)
                    }
                  />
                </label>
                <button
                  onClick={async () => {
                    try {
                      await workExperienceService.makeDeleteWorkExperienceFromIdRequest(
                        workExp.Id
                      );

                      await UpdateResume();

                      toast.success(`Work experience deleted successfully.`, {
                        position: "bottom-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    } catch (error) {
                      toast.error(`Error deleting work experience.`, {
                        position: "bottom-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    }
                  }}
                >
                  Delete this work experience!
                </button>
              </div>
            ))}
            <div className="flex justify-start">
              <h2>Education:</h2>
            </div>
            <button
              onClick={() => setIsOpenEducationModal(!isOpenEducationModal)}
            >
              Add more educations
            </button>
            {userData?.Education.map((education, index) => (
              <div key={education.Id} className="space-y-4">
                <div className="flex justify-between">
                  <div className="flex flex-col text-left">
                    <label>School name:</label>
                    <input
                      type="text"
                      name="SchoolName"
                      value={education.SchoolName}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label>Degree:</label>
                    <input
                      type="text"
                      name="Degree"
                      value={education.Degree}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col text-left">
                    <label>Field of study:</label>
                    <input
                      type="text"
                      name="FieldOfStudy"
                      value={education.FieldOfStudy}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label>Start date:</label>
                    <input
                      type="date"
                      name="StartDate"
                      value={new Date(Date.parse(education.StartDate))
                        .toISOString()
                        .substring(0, 10)}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label>End date:</label>
                    <input
                      type="date"
                      name="EndDate"
                      value={
                        education.EndDate
                          ? new Date(Date.parse(education.EndDate))
                              .toISOString()
                              .substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                  </div>
                </div>
                <label className="flex flex-col text-left">
                  Description:
                  <textarea
                    name="Description"
                    value={education.Description}
                    onChange={(event) => handleEducationChange(event, index)}
                  />
                </label>
                <button
                  onClick={async () => {
                    try {
                      await educationsService.MakeDeleteEducationRequest(
                        education.Id
                      );

                      await UpdateResume();

                      toast.success(`Education deleted successfully.`, {
                        position: "bottom-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    } catch (error) {
                      toast.error(`Error deleting education.`, {
                        position: "bottom-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    }
                  }}
                >
                  Delete this education!
                </button>
              </div>
            ))}
          </div>
        </div>
        <div
          className="max-w-[489px] min-w-[400px]"
          dangerouslySetInnerHTML={{
            __html: templateRef.current ? templateRef.current(userData) : "",
          }}
        />
      </div>
      <ToastContainer />
    </>
  );
};
