import { Outlet } from "react-router-dom";
import Template0  from "../components/Template0";
import Template1  from "../components/Template1";
import Template2  from "../components/Template2";

function Templates() { 
    return (
      <>
        <div className="grid grid-rows-2 grid-col-2">
          <Template0 />
          <Template1 />
          <Template2 />
        </div>

        <Outlet />
      </>
    );
}
export default Templates;