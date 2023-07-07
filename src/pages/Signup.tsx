function Signup()
{
    let userdata:any = {
        username: String,
        email: String,
        password: String,
      };
      
      function onChangeEmail(e: React.FormEvent<HTMLInputElement>):void {
        userdata.email = e.currentTarget.value;
      };
    
      function onChangePassword(e: React.FormEvent<HTMLInputElement>):void {
        userdata.password = e.currentTarget.value;
      };

      function onChangeUserName(e: React.FormEvent<HTMLInputElement>):void {
        userdata.username = e.currentTarget.value;
      };
    
      function submit() {
        alert(`${userdata.username} ${userdata.email} ${userdata.password}`);
        // api call
      };
    
    return (
      <>
        <div className="grid">
          <input
            className="m-3"
            type="text"
            onChange={onChangeUserName}
            placeholder=" Enter username"
          ></input>
          <input
            className="m-3"
            type="email"
            onChange={onChangeEmail}
            placeholder=" Enter email"
          ></input>
           <input
            className="m-3"
            type="password"
            onChange={onChangePassword}
            placeholder=" Enter password"
          ></input>
        </div>

        <button className="text-[#646cff] bg-black" onClick={submit}>
          Sign up
        </button>
      </>
    );
}
export default Signup;