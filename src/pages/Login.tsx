import { Form } from "react-router-dom";

function Signin() {
    let userdata:any = {
        username: String,
        password: String
      };
      
      function onChangeUserName(e: React.FormEvent<HTMLInputElement>):void {
        userdata.username = e.currentTarget.value;
      };
    
      function onChangePassword(e: React.FormEvent<HTMLInputElement>):void {
        userdata.password = e.currentTarget.value;
      };
    
      function submit() {
        alert(`${userdata.username} ${userdata.password}`);
        // api call
      };
    
    return (
      <>
        <Form className="grid">
          <input
            className="m-3"
            type="email"
            onChange={onChangeUserName}
            placeholder=" Enter username"
          ></input>
          <input
            className="m-3"
            type="password"
            onChange={onChangePassword}
            placeholder=" Enter password"
          ></input>
        </Form>

        <button className="text-[#646cff] bg-black" onClick={submit}>
          Sign in to your account
        </button>
      </>
    );
}
export default Signin;