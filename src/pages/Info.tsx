import React, {useState} from "react";
import storageService from "../services/storage-service";
import authenticationService from "../services/authentication-service";

const info: { [key: string ]: string | null }[] = [
  {"First Name": "Your information", "Last Name": "Your information"},
  {"Email": "Your information", "Password": "Your information"},
];

let accessToken: String | null = storageService.retrieveAccessToken();
let refreshToken: String | null = storageService.retrieveRefreshToken();

export const Info:React.FC = () => {
  let [editPersonalInfo, setPersonalInfo] = useState(false);
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

          <div className="ml-5">
            {info.map((infoItem, index) => (
              <div key={index} className="grid grid-cols-2 place-items-start">
                {Object.entries(infoItem).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <div key={key} className="flex flex-col">
                      <p className="mb-3 text-left text-white">{key}</p>
                      <input
                        type={(key === "Password") ? "password" : (key === "Email") ? "email":"text"}
                        defaultValue={value || ""}
                        className={
                          editPersonalInfo ? "text-black p-3 rounded-md w-[100%]" : "p-3 rounded-md text-white w-[100%]"
                        }
                        disabled={!editPersonalInfo}
                        style={
                          !editPersonalInfo ? {backgroundColor : "#747982", padding: "0.75rem", color: "white"} : {backgroundColor : '#f1f1f1'}
                        }
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-start m-2">
            <button
              type="submit"
              onClick={() => {
                setPersonalInfo(false);
              }}
              className="rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2"
              style={!editPersonalInfo ? {backgroundColor : "#747982", color: "white"} : {backgroundColor : '#f1f1f1'}}
              >
              Save
            </button>
            <button
              type="submit"
              onClick={() => {
                setPersonalInfo(true);
              }}
              className={
                (!editPersonalInfo)?`bg-slate-50 rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2`:`bg-gray-70 text-white rounded-lg grid place-content-center shadow-xl text-[80%] w-[10%] h-[10%] ml-2`
              }
              style={editPersonalInfo ? {backgroundColor : "#747982"} : {backgroundColor : '#f1f1f1'}}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );

}