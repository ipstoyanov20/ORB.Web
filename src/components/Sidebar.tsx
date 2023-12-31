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
        <div className='z-[-1] fixed right-0 top-0 bg-gray-200 w-[100%] h-screen'></div>

        <div className="z-50 grid place-content-start shadow-2xl fixed left-0 top-0 p-5 h-[100%] bg-gradient-to-br from-gray-200 to-gray-500">
         
          <nav className="grid grid-rows-4 place-content-center">
            <NavLink
              className="relative p-4 font-bold text-left text-white transition-all duration-150 bg-gray-500 rounded-t-md hover:bg-gray-600"
              to="/panel/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className="relative p-4 font-bold text-left text-white transition-all duration-150 bg-gray-500 hover:bg-gray-600"
              to="/panel/settings"
            >
              Account Settings
            </NavLink>
            <NavLink
              className="relative p-4 font-bold text-left text-white transition-all duration-150 bg-gray-500 hover:bg-gray-600"
              to="/panel/templates"
              id="templates"
            >
              Templates
            </NavLink>
            <NavLink
              className="relative p-4 font-bold text-left text-white transition-all duration-150 bg-gray-500 hover:bg-gray-600"
              to="/panel/myresumes"
            >
              My Resumes
            </NavLink>
            <button
              className="relative p-4 font-bold text-left text-white transition-all duration-150 bg-gray-500 hover:text-red-500 rounded-b-md hover:bg-gray-600"
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