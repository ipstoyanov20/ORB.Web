/* eslint-disable @typescript-eslint/no-extra-semi */
import { Form, Link } from "react-router-dom";
import authenticationService from "../services/authentication-service";
import storageService from "../services/storage-service";
import {ResponseData } from "../services/apiTypes";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let userdata: any = {
  email: String,
  password: String
};

function Signin() {
  let navigate = useNavigate();


  function onChangeEmail(e: React.FormEvent<HTMLInputElement>): void {
    userdata.email = e.currentTarget.value;
  };

  function onChangePassword(e: React.FormEvent<HTMLInputElement>): void {
    userdata.password = e.currentTarget.value;
  };


  async function submit() {
    if (userdata.password === String("") || !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userdata.email))) {
      return;
    }

    await authenticationService.makeLoginRequest(userdata.email, userdata.password).then(function (response) {
      const responseData: ResponseData = response.data as unknown as ResponseData;
      
     // alert(responseData.accessToken);
      storageService.saveAccessToken(responseData.accessToken);
      storageService.saveRefreshToken(responseData.refreshToken);
      storageService.saveTokenExpiresDate(responseData.expiration);

      navigate("/panel/dashboard")


    }).catch(function(error) {
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
    })
  }


  return (
    <>
      <div className="grid w-full p-10 rounded-lg shadow bg-gray-500">
        <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in
        </h1>
        <Form className="grid">
          <input
            className="m-3 rounded text-slate-500 font-bold"
            type="email"
            onChange={onChangeEmail}
            placeholder="Enter email"
            required
          ></input>
          <input
            className="m-3 rounded text-slate-500 font-bold"
            type="password"
            onChange={onChangePassword}
            placeholder="Enter password"
            required
          ></input>
          <button id="submit" type="submit" className="m-3 duration-75 transition-all rounded-sm text-black bg-gray-300 hover:bg-gray-400" onClick={submit}>
            Sign in
          </button>
          <Link to='/register' className="text-gray-300 text-sm hover:text-gray-400">
            Don't have an account? Sign up
          </Link>
        </Form>

        <ToastContainer />
      </div>
    </>
  );
}

document.getElementById("submit")?.addEventListener("click", function(event) {
  event.preventDefault();
})

export default Signin;