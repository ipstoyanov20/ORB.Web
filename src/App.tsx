import React from 'react';
import './App.css';

function App() {
  let userdata:any = {
    email: String,
    password: String
  };
  
  function onChangeEmail(e: React.FormEvent<HTMLInputElement>):void {
    userdata.email = e.currentTarget.value;
  };

  function onChangePassword(e: React.FormEvent<HTMLInputElement>):void {
    userdata.password = e.currentTarget.value;
  };

  function submit() {
    alert(`${userdata.email} ${userdata.password}`);
    // api call
  };


  return (
    <>
      <div className="login">
        <input className='m-3' type="email" onChange = {onChangeEmail} placeholder="Enter email"></input>
        <input className='m-3' type="password" onChange = {onChangePassword} placeholder="Enter password"></input>
      </div>

      <button className='text-[#646cff] bg-black' onClick={submit}>Login</button>
    </>
  );
  
};

export default App;
