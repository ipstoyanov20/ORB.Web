import { Form } from "react-router-dom";
import authenticationService from "../services/authentication-service";

function Signin() {
  let userdata: any = {
    username: String,
    password: String
  };

  function onChangeUserName(e: React.FormEvent<HTMLInputElement>): void {
    userdata.username = e.currentTarget.value;
  };

  function onChangePassword(e: React.FormEvent<HTMLInputElement>): void {
    userdata.password = e.currentTarget.value;
  };

  async function submit() {
    const response = await authenticationService.makeLoginRequest(userdata.username, userdata.password);
    alert(response.data);
  };

  return (
    <>
      <div className="grid w-full p-10 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in
        </h1>
        <Form className="grid">
          <input
            className="m-3 rounded text-slate-500 font-bold"
            type="email"
            onChange={onChangeUserName}
            placeholder="Enter username"
          ></input>
          <input
            className="m-3 rounded text-slate-500 font-bold"
            type="password"
            onChange={onChangePassword}
            placeholder="Enter password"
          ></input>
        </Form>

        <button className="m-3 text-[#646cff] bg-black hover:bg-indigo-500 hover:text-slate-950" onClick={submit}>
          Sign in to your account
        </button>
      </div>
    </>
  );
}
export default Signin;