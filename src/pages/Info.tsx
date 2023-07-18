import React, {useState, useEffect} from "react";
import userService from "../services/user-service";
import { Form } from "react-router-dom";
import { UserVM } from "../api";
import { AxiosError } from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let fNameI: HTMLInputElement | null; 
let fNameV: string | undefined | null; 
let lNameI: HTMLInputElement | null; 
let lNameV: string | undefined; 
let emailI: HTMLInputElement | null; 
let emailV: string | undefined;

let userData: any = {
  fName: String,
  lName: String,
  email: String,
}

let updatedPersonalInfo: UserVM = {
  firstName: String(fNameV) , 
  lastName: String(lNameV),
  email: String(emailV),
};

export const Info:React.FC = () => {
  let [editPersonalInfo, setPersonalInfo] = useState(false);
  let [info, setInfo] = useState([{"First Name": fNameV, "Last Name": lNameV},
  {"Email": emailV}]);
  
  useEffect(() => {
    try {
      (async () => {
        const response2 = await userService.makeGetCurrentUserRequest();
        setInfo([{"First Name": response2.data.firstName, "Last Name": response2.data.lastName},
        {"Email": response2.data.email}])
        
        userData.fName = response2.data.firstName;
        userData.lName = response2.data.lastName;
        userData.email = response2.data.email;
      }
      )();
      
    } catch (error) {

      console.log(error);
    }
  }, [info]);

  function submitForm() {

     fNameI = document.getElementById("FirstName") as HTMLInputElement | null;
     fNameV = fNameI?.value;
     lNameI = document.getElementById("LastName") as HTMLInputElement | null;
     lNameV = lNameI?.value;
     emailI = document.getElementById("Email") as HTMLInputElement | null;
     emailV = emailI?.value;

    console.log(`fname: ${fNameV} lname: ${lNameV} email: ${emailV}`);
  }
    
  const handlePersonalInfoSave =  async () => {
    
    submitForm();
    updatedPersonalInfo = {
      firstName: String(fNameV), 
      lastName: String(lNameV),
      email: String(emailV),
    };

    await userService.makeUpdateUserRequest(updatedPersonalInfo.firstName, updatedPersonalInfo.lastName, updatedPersonalInfo.email).then(
      function(response) {

        toast.success(`Personal info updated successfully`, {
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
    ).catch(function(error: AxiosError) {
      console.log(error);

      
      toast.error(`Error occurred: ${error.response.data.errors[Object.keys(error.response?.data.errors)[0]]}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })

    
    // After saving the data, set edit mode to false
    setPersonalInfo(false);
  };

 

  return (
    <>
      <div className="text-black z-1 absolute w-[80%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[40%] h-[50%] absolute top-30 rounded-md shadow-xl bg-gray-400">
          <div className="flex p-5 rounded-lg justify-center justify items-center content-center">
            <img className="w-20 h-20" src="../src/assets/girl.png" alt="" />
            <span className="grow">
              <p className="ml-5 text-left text-white">{userData.fName + " " + userData.lName}</p>
              <p className="ml-5 text-md text-left text-gray-500">Change Avatar</p>
            </span>
          </div>

          <Form className="ml-5">
            {info.map((infoItem, index) => (
              <div key={index} className="grid grid-cols-2 place-items-start">
                {Object.entries(infoItem).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <div key={key} className="flex flex-col">
                      <p className="mb-3 text-left text-white">{key}</p>
                      <input
                        type={
                          key === "Password"
                            ? "password"
                            : key === "Email"
                            ? "email"
                            : "text"
                        }
                        defaultValue={value || ""}
                        className={
                          editPersonalInfo
                            ? "text-black p-3 rounded-md"
                            : "p-3 rounded-md text-white bg-[#747982] w-[100%]"
                        }
                        id={`${key.replace(/\s/g, "")}`}
                        disabled={!editPersonalInfo}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div className="flex justify-start m-2">
              <button
                type="submit"
                onClick={handlePersonalInfoSave}
                className={
                  editPersonalInfo
                    ? `bg-slate-50 rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2`
                    : `bg-[#747982] text-white rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2`
                }
                id="save"
              >
                Save
              </button>
              <button
                type="submit"
                onClick={() => {
                  setPersonalInfo(true);
                }}
                className={
                  !editPersonalInfo
                    ? `bg-slate-50 rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2`
                    : `bg-[#747982] text-white rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2`
                }
              >
                Edit
              </button>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  );

}

document.getElementById("save")?.addEventListener("click", function(event) {
  event.preventDefault();
})