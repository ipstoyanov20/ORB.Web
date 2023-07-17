import React, {useState} from "react";
const info: { [key: string ]: string | null }[] = [
  {"First Name": "Your information", "Last Name": "Your information"},
  {"Username": "Your information", "Email": "Your information"},
  {"Country": "Your information", "City": "Your information"},
  {"Address": "Your information", "Postal Code": "Your information"},
];
const educationalInfo: { [key: string ]: string | null }[] = [
  {"Degree": "Your information"},
  {"Field of Study": "Your information"},
  {"Start date": "Your information"},
  {"End date": "Your information"},
];
export const Info:React.FC = () => {
  let [editPersonalInfo, setPersonalInfo] = useState(false);
  let [editEducationalInfo, setEducationalInfo] = useState(false);
  return (
    <>
      <div className="text-black z-1 absolute w-[80%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[40%] h-[80%] absolute top-30 left-10 rounded-md shadow-xl bg-gray-400">
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
                        defaultValue={value || ""}
                        className=" bg-slate-50 p-3 rounded-md w-[100%]"
                        disabled={!editPersonalInfo}
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
              className="rounded-lg grid place-content-center shadow-xl text-[80%] bg-white w-[10%] h-[10%] ml-2 "
            >
              Save
            </button>
            <button
              type="submit"
              onClick={() => {
                setPersonalInfo(true);
              }}
              className="rounded-lg shadow-xl text-[80%] grid place-content-center w-[10%] h-[10%] bg-white ml-2 "
            >
              Edit
            </button>
          </div>
        </div>

        <div className="w-[40%] h-[80%] absolute top-30 right-[10%] rounded-md shadow-xl bg-gray-400">
          <div className="flex p-5 rounded-lg justify-center justify items-center content-center">
            <img
              className="w-20 h-20"
              src="../src/assets/mortarboard.png"
              alt=""
            />
            <span className="grow">
              <p className="ml-5 text-left text-white">
                Educational Information
              </p>
            </span>
          </div>
          {/* Education */}
          <div className="ml-5">
            {educationalInfo.map((infoItem, index) => (
              <div key={index} className="grid grid-cols-2 place-items-start">
                {Object.entries(infoItem).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <div key={key} className="flex flex-col">
                      <p className="mb-3 text-left text-white">{key}</p>
                      <input
                        defaultValue={value || ""}
                        className=" bg-slate-50 p-3 rounded-md w-[100%]"
                        disabled={!editEducationalInfo}
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
                setEducationalInfo(false);
              }}
              className="rounded-lg grid place-content-center shadow-xl text-[80%] bg-white w-[10%] h-[10%] ml-2 "
            >
              Save
            </button>
            <button
              type="submit"
              onClick={() => {
                setEducationalInfo(true);
              }}
              className="rounded-lg shadow-xl text-[80%] grid place-content-center w-[10%] h-[10%] bg-white ml-2 "
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );

}