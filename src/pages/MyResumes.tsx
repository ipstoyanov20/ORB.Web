import { Link } from "react-router-dom";

let resumesRows: number = 5;
export const MyResumes:React.FC = () => {
    return (
      <div className="text-black z-1 absolute w-[80%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[80%] h-[50%] group z-10 relative rounded-md shadow-xl bg-[#ffffff]">
          <h1 className="font-bold p-5 text-2xl text-left text-gray-500 absolute top-[-15%] left-0">
            My Resumes
          </h1>
          <hr className="bg-gray-500 w-[20%] h-1 group-hover:w-[100%] transition-all duration-500" />

          <button className="bg-gary-500 z-20 absolute right-0 p-2 m-4 rounded hover:bg-gray-700">
            <Link className="text-white " to="/panel/resumes">
              Create Resume
            </Link>
          </button>


          <div className="absolute w-[100%] h-[100%] grid place-items-center">
            <div className={`w-[90%] h-[60%] bg-gray-100 place-self-center grid-rows-${resumesRows} rounded-md`}></div>
          </div>
        </div>
      </div>
    );

}