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
        <div className="grid w-full p-10 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
              <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up
              </h1>
          <input
            className="m-3 rounded text-slate-500 font-bold"
            type="text"
            onChange={onChangeUserName}
            placeholder=" Enter username"
          ></input>
          <input
            className="m-3 rounded text-slate-500 font-bold"
            type="email"
            onChange={onChangeEmail}
            placeholder=" Enter email"
          ></input>
           <input
            className="m-3 rounded text-slate-500 font-bold"
            type="password"
            onChange={onChangePassword}
            placeholder=" Enter password"
          ></input>
          <button className="m-3 text-[#646cff] bg-black hover:bg-indigo-500 hover:text-slate-950" onClick={submit}>
          Sign up
          </button>
        </div> 
      </>
    );
}
export default Signup;