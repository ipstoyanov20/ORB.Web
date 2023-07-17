import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import authenticationService from "../services/authentication-service";

function Signup()
{
  let navigate = useNavigate();

  let userdata:any = {
      firstName: String,
      lastName: String,
      email: String,
      password: String,
  };
    
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
    await authenticationService.makeRegisterRequest(userdata.firstName, userdata.lastName, userdata.email, userdata.password).then(function ()
    {
      navigate("/login")
    });
  
  };
  
  return (
    <>
      <div className="grid w-full p-10 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up
        </h1>

        <input
          className="m-3 rounded text-slate-500 font-bold"
          type="text"
          onChange={onChangeFirstName}
          placeholder="Enter first name"
        >
        </input>

        <input className="m-3 rounded text-slate-500 font-bold"
          type="text"
          onChange={onChangeLastName}
          placeholder="Enter last name"
        >
        </input>

        <input
          className="m-3 rounded text-slate-500 font-bold"
          type="email"
          onChange={onChangeEmail}
          placeholder="Enter email"
        >
        </input>

        <input
          className="m-3 rounded text-slate-500 font-bold"
          type="password"
          onChange={onChangePassword}
          placeholder="Enter password"
        >
        </input>
      
      <button onClick={submit} className="m-3 text-[#646cff] bg-black hover:bg-indigo-500 hover:text-slate-950 p-2.5 ">
        Sign up
      </button>
      </div> 
    </>
  );
}
export default Signup;
