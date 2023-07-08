import { Outlet, Link } from 'react-router-dom';
function NavMenu() {
    return (
      <>
        <div className="grid grid-cols-3 absolute top-0 left-0 p-3">
          <Link
            to="/"
            className="rounded-md bg-black m-3 px-4 py-2 hover:bg-gray-700 hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-black m-3 px-4 py-2 hover:bg-gray-700 hover:cursor-pointer"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="rounded-md bg-black m-3 px-4 py-2 hover:bg-gray-700 hover:cursor-pointer"
          >
            Sign in
          </Link>
        </div>

        <Outlet />
      </>
    );
}

export default NavMenu;