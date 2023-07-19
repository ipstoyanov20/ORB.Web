import { Outlet, Link } from 'react-router-dom';
function NavMenu() {
    return (
      <>
       
        <div className="z-30 absolute top-0 left-0 p-10">
          <Link
            to="/"
            className=" relative before:bg-[url('../src/assets/left.png')] pl-12 before:absolute before:left-0 before:top-0 before:w-10 before:h-10 before:bg-no-repeat before:bg-contain text-black transition-all duration-75 hover:border-b-4 hover:border-b-gray-600 m-3 px-4 py-2 hover:cursor-pointer"
          >
            Home page
          </Link>
        </div>

        <Outlet />
      </>
    );
}

export default NavMenu;