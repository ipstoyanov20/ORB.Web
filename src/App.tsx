import React from 'react';
import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  if (count === 0) {
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
  
    function submitLogin() {
      alert(`Login: ${userdata.email} ${userdata.password}`);
      // api call
    };
  
  
    return (
      <>
        <div className="inputDiv">
          <input className = "m-3" type="email" onChange = {onChangeEmail} placeholder="Email"></input>
          <input className = "m-3" type="password" onChange = {onChangePassword} placeholder="Password"></input>
        </div>
  
        <div className="buttons">
          <button className='text-[#646cff] bg-black' onClick={submitLogin}>Login</button>
          <div className="break"></div>
          <button className='text-[#646cff] bg-black' onClick={() => {
            setCount((preval: number):number => preval + 1);
          }}>state++</button>
        </div>
      </>
    );
  }
  else if (count === 1) {
    let userdata:any = {
      fName: String,
      lName: String,
      email: String,
      password: String
    };

    function onChangeEmail(e: React.FormEvent<HTMLInputElement>): void {
      userdata.email = e.currentTarget.value;
    };
  
    function onChangePassword(e: React.FormEvent<HTMLInputElement>): void {
      userdata.password = e.currentTarget.value;
    };

    function onChangeFName(e: React.FormEvent<HTMLInputElement>): void {
      userdata.fName = e.currentTarget.value;
    };

    function onChangeLName(e: React.FormEvent<HTMLInputElement>): void {
      userdata.lName = e.currentTarget.value;
    }
  
    function submitRegister() {
      alert(`Register: ${userdata.fName} ${userdata.lName} ${userdata.email} ${userdata.password}`);
      // api call
    };

    return (
      <>
        <div className="inputDiv">
          <input className = "m-3" type="text" onChange = {onChangeFName} placeholder="First name"></input>
          <input className = "m-3" type="text" onChange = {onChangeLName} placeholder="Last name"></input>
          <input className = "m-3" type="email" onChange = {onChangeEmail} placeholder="Email"></input>
          <input className = "m-3" type="password" onChange = {onChangePassword} placeholder="Password"></input>

        </div>

        <div className="buttons">
          <button className='text-[#646cff] bg-black' onClick={submitRegister}>Register</button>
          <button className='text-[#646cff] bg-black' onClick={() => {
            setCount((preval: number):number => preval - 1);
          }}>state--</button>
        </div>
      </>
    )
  }

};

export default App;
