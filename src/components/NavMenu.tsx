import { Outlet, NavLink } from 'react-router-dom';
function NavMenu() {
    return (
      <>
       
        <div className="grid grid-cols-3 z-30 absolute top-0 right-0 p-3">
          <NavLink
            to="/"
            className="rounded-md bg-gray-700 m-3 px-4 py-2 hover:bg-gray-600 hover:cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className="rounded-md bg-gray-700 m-3 px-4 py-2 hover:bg-gray-600 hover:cursor-pointer"
          >
            Sign up
          </NavLink>
          <NavLink
            to="/login"
            className="rounded-md bg-gray-700 m-3 px-4 py-2 hover:bg-gray-600 hover:cursor-pointer"
          >
            Sign in
          </NavLink>
        </div>

        <Outlet />
      </>
    );
}

export default NavMenu;