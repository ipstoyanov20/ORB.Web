import React, {useState} from "react";
import storageService from "../services/storage-service";
import authenticationService from "../services/authentication-service";
import { Form } from "react-router-dom";
import axios from "axios";

const info: { [key: string ]: string | null }[] = [
  {"First Name": "Your information", "Last Name": "Your information"},
  {"Email": "Your information"},
];

let accessToken: String | null = storageService.retrieveAccessToken();
let refreshToken: String | null = storageService.retrieveRefreshToken();

let fNameI: HTMLInputElement | null; 
let fNameV: string | undefined; 
let lNameI: HTMLInputElement | null; 
let lNameV: string | undefined; 
let emailI: HTMLInputElement | null; 
let emailV: string | undefined;
// let passwordI: HTMLInputElement | null;
// let passwordV: string | undefined;

export const Info:React.FC = () => {
  let [editPersonalInfo, setPersonalInfo] = useState(false);

  function submitForm() {
    setPersonalInfo(false);

     fNameI = document.getElementById("FirstName") as HTMLInputElement | null;
     fNameV = fNameI?.value;
     lNameI = document.getElementById("LastName") as HTMLInputElement | null;
     lNameV = lNameI?.value;
     emailI = document.getElementById("Email") as HTMLInputElement | null;
     emailV = emailI?.value;
    //  passwordI = document.getElementById("LastName") as HTMLInputElement | null;
    //  passwordV = passwordI?.value;

    console.log(`fname: ${fNameV} lname: ${lNameV} email: ${emailV}`);
  }
    
  const handlePersonalInfoSave = () => {
    
    submitForm();
    const updatedPersonalInfo = {
      firstName: fNameV, 
      lastName: lNameV,
      email: emailV,
    };

    // Send the updated personal info to the API
    axios
      .put("https://localhost:7206/api/user", {accessToken,updatedPersonalInfo}) // Replace the URL with your API endpoint
      .then((response) => {
        // Handle the response from the server if needed
        console.log("Personal info updated successfully");
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error updating personal info:", error.response.data);
      });

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
              <p className="ml-5 text-left text-white">Fist Name Last Name</p>
              <p className="ml-5 text-md text-left text-gray-500">Username</p>
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
    </>
  );

}

document.getElementById("save")?.addEventListener("click", function(event) {
  event.preventDefault();
})