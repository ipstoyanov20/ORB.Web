import { Form, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import authenticationService from "../services/authentication-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let userdata:any = {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
};

function Signup()
{
  let navigate = useNavigate();
    
  function onChangeEmail(e: React.FormEvent<HTMLInputElement>):void {
    userdata.email = e.currentTarget.value;
  };

  function onChangePassword(e: React.FormEvent<HTMLInputElement>):void {
    userdata.password = e.currentTarget.value;
  };

  function onChangeFirstName(e: React.FormEvent<HTMLInputElement>):void {
    userdata.firstName = e.currentTarget.value;
  };

  function onChangeLastName(e: React.FormEvent<HTMLInputElement>):void {
    userdata.lastName = e.currentTarget.value;
  };

  async function submit() {
    // api call for register
    if (!(/[A-Z]\w*/.test(userdata.firstName)) || userdata.firstName === String("")) {
      console.log('s')
      toast.error(`Verification error: Invalid first name!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    else if (!(/[A-Z]\w*/.test(userdata.lastName)) || userdata.lastName === String("")) {
      toast.error(`Verification error: Invalid last name!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userdata.email))) {
      toast.error(`Verification error: Invalid email!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    else if (userdata.password.length == 0) {
      toast.error(`Verification error: Password required!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    else if (userdata.password.length < 6) {
      toast.error(`Verification error: Password must be at least 6 characters long!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    await authenticationService.makeRegisterRequest(userdata.firstName, userdata.lastName, userdata.email, userdata.password).then(function ()
    {
      navigate("/login")
    }).catch(function (error) {
      const message = error.response.data.message;
      toast.error(`Verification error: ${message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  
  };
  
  return (
    <>
      <div className="grid w-full p-10 bg-gray-500 rounded-lg shadow">
        <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up
        </h1>
        <Form className="grid">
          <input
            className="m-3 font-bold rounded text-slate-500"
            type="text"
            onChange={onChangeFirstName}
            placeholder="Enter first name"
            required
          >
          </input>

          <input className="m-3 font-bold rounded text-slate-500"
            type="text"
            onChange={onChangeLastName}
            placeholder="Enter last name"
            required
          >
          </input>

          <input
            className="m-3 font-bold rounded text-slate-500"
            type="email"
            onChange={onChangeEmail}
            placeholder="Enter email"
            required
          >
          </input>

          <input
            className="m-3 font-bold rounded text-slate-500"
            type="password"
            onChange={onChangePassword}
            placeholder="Enter password"
            required
          >
          </input>
        
          <button id="submit" type="submit" onClick={submit} className="m-3 text-black transition-all duration-150 rounded-sm hover:bg-slate-300 bg-slate-50 ">
            Sign up
          </button>

          <Link to='/login' className="text-sm text-gray-300 hover:text-gray-400">
            Already have an account? Sign in
          </Link>
        </Form>

        <ToastContainer/>
      </div> 
    </>
  );
}

document.getElementById("submit")?.addEventListener("click", function(event) {
  event.preventDefault();
})

export default Signup;
