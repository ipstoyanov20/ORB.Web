import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
      <>
        <div className='z-[-1] fixed right-0 top-0 bg-gray-200 w-[100%] h-[100%]'></div>

        <div className="grid place-content-start shadow-2xl fixed left-0 top-0 p-5 w-[20%] h-[100%] bg-gradient-to-br from-gray-200 to-gray-500">
         
          <nav className="grid place-content-center grid-rows-4">
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
              to="/panel/template0"
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