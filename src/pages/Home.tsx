import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="grid place-items-center grid-cols-2 absolute left-0 top-0 w-[100%] h-[100%]">
        <div className="grid place-content-center w-[50%] h-[100%]">
          <h1 className="font-sans w-[100%] text-left font-bold">
            Build a professional resume for free
          </h1>
          <p className="font-sans text-xl w-[100%] text-left mt-10">
            Create a professional resume with the only truly free resume builder
            online. Browse our templates, then easily build your
            resume.
          </p>
          <Link to='/login' className=" text-black h-14 w-32 text-left transition-all duration-75 grid place-content-center text-bold mt-5 hover:border-b-4 hover:border-b-gray-600">
            Start creating
          </Link>
        </div>
        <div className="bg-[url('../src/assets/cv.png')] bg-contain bg-no-repeat bg-center w-[80%] h-[70%]"></div>
      </div>
    )
}
export default Home