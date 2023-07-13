import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
      <>
        <div className='z-[-1] rounded-md absolute right-0 top-0 bg-gray-200 w-[80%] h-[100%]'></div>

        <div className="grid place-content-center shadow-2xl absolute left-0 top-0 p-5 w-[20%] h-[100%] rounded-md bg-gradient-to-br from-gray-200 to-gray-700">
          <div className="grid text-2xl mb-5 text-right place-items-center font-bold text-gray-700">
            <img className="m-5 w-20 h-20" src="../src/assets/girl.png" alt="" />
            Your Profile Name
          </div>
          <nav className="grid  grid-rows-4">
            <Link
              className=" rounded-t-md relative p-4 text-left text-white bg-gray-700 hover:bg-gray-600"
              to="/panel"
            >
              Dashboard
            </Link>
            <Link
              className=" relative p-4 text-left text-white bg-gray-700 hover:bg-gray-600"
              to="/panel/personal"
            >
              Personal Info
            </Link>
            <Link
              className=" relative p-4 text-left text-white bg-gray-700 hover:bg-gray-600"
              to="/panel/templates"
            >
              Templates
            </Link>
            <Link
              className=" rounded-b-md relative p-4 text-left text-white bg-gray-700 hover:bg-gray-600"
              to="/panel/myresumes"
            >
              My Resumes
            </Link>
          </nav>
        </div>
        <Outlet />
      </>
    );
}

export default Sidebar;