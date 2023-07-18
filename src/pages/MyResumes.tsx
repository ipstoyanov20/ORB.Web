import { Link } from "react-router-dom";


export const MyResumes:React.FC = () => {
    return (
      <div className="text-black z-1 absolute w-[80%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[80%] h-[50%] group relative rounded-md shadow-xl bg-[#ffffff]">
          <h1 className="font-bold p-5 text-2xl text-left text-blue-500 absolute top-[-15%] left-0">
            My Resumes
          </h1>
          <hr className="bg-blue-500 w-[20%] h-1 group-hover:w-[100%] transition-all duration-500" />

          <button className="bg-blue-500 absolute right-0 p-2 m-4 rounded-sm hover:bg-blue-700">
            <Link className="text-white " to="/resumes">
              Create Resume
            </Link>
          </button>


          <div className="absolute w-[100%] h-[100%] grid place-items-center">
            <div className="w-[90%] h-[60%] bg-blue-100 place-self-center grid-rows-1 rounded-md"></div>
          </div>
        </div>
      </div>
    );

}