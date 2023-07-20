import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import storageService from "../services/storage-service";


function Sidebar() {
  const navigate = useNavigate();
  
  const logOut = () => {
    storageService.deleteUserData();
    navigate("/");
  }

    return (
      <>
        <div className='z-[-1] rounded-md absolute right-0 top-0 bg-gray-200 w-[80%] h-[100%]'></div>

        <div className="grid place-content-start shadow-2xl absolute left-0 top-0 p-5 w-[20%] h-[100%] rounded-md bg-gradient-to-br from-gray-200 to-gray-500">
         
          <nav className="grid place-content-center grid-rows-4">
            <NavLink
              className=" rounded-t-md relative p-4 text-left text-white bg-gray-500 hover:bg-gray-600"
              to="/panel/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className=" font-bold relative p-4 text-left text-white bg-gray-500 hover:bg-gray-600"
              to="/panel/settings"
            >
              Account Settings
            </NavLink>
            <NavLink
              className=" font-bold relative p-4 text-left text-white bg-gray-500 hover:bg-gray-600"
              to="/panel/templates"
            >
              Templates
            </NavLink>
            <NavLink
              className="font-bold relative p-4 text-left text-white bg-gray-500 hover:bg-gray-600"
              to="/panel/myresumes"
            >
              My Resumes
            </NavLink>
            <button
              className="rounded-b-md relative p-4 text-left text-white bg-gray-500 hover:bg-gray-600"
              onClick={logOut}
            >
              Log out
            </button>
          </nav>
        </div>

        <Outlet />
      </>
    );
}

export default Sidebar;