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
          <Link to='/login' className="grid w-32 mt-5 text-left text-white transition-all duration-150 rounded-lg hover:text-black h-14 place-content-center text-bold hover:bg-slate-300 bg-slate-400">
            Start creating
          </Link>
        </div>
        <div className="bg-[url('../src/assets/cv.png')] bg-contain bg-no-repeat bg-center w-[80%] h-[70%]"></div>
      </div>
    )
}
export default Home