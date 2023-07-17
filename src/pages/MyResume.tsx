import { useState } from "react";
import Handlebars from "handlebars";
import React from "react";

export const MyResume:React.FC = () => {
  const [userData, setUserData] = useState({ 
    fname: "John", 
    lname: "Doe",
    email: "test@mail.com",
    phone: "+359 887 661 552"
   });

  const content = `<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;  
  }
  
  body {
    min-height: 100%;  
    background: #eee;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #222;
    font-size: 14px;
    line-height: 26px;
    padding-bottom: 50px;
  }
  
  .container {
    max-width: 700px;   
    background: #fff;
    margin: 0px auto 0px; 
    box-shadow: 1px 1px 2px #DAD7D7;
    border-radius: 3px;  
    padding: 40px;
    margin-top: 50px;
  }
  
  .header {
    margin-bottom: 30px;
    
    .full-name {
      font-size: 40px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    
    .first-name {
      font-weight: 700;
    }
    
    .last-name {
      font-weight: 300;
    }
    
    .contact-info {
      margin-bottom: 20px;
    }
    
    .email ,
    .phone {
      color: #999;
      font-weight: 300;
    } 
    
    .separator {
      height: 10px;
      display: inline-block;
      border-left: 2px solid #999;
      margin: 0px 10px;
    }
    
    .position {
      font-weight: bold;
      display: inline-block;
      margin-right: 10px;
      text-decoration: underline;
    }
  }
  
  
  .details {
    line-height: 20px;
    
    .section {
      margin-bottom: 40px;  
    }
    
    .section:last-of-type {
      margin-bottom: 0px;  
    }
    
    .section__title {
      letter-spacing: 2px;
      color: #54AFE4;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .section__list-item {
      margin-bottom: 40px;
    }
    
    .section__list-item:last-of-type {
      margin-bottom: 0;
    }
    
    .left ,
    .right {
      vertical-align: top;
      display: inline-block;
    }
    
    .left {
      width: 60%;    
    }
    
    .right {
      tex-align: right;
      width: 39%;    
    }
    
    .name {
      font-weight: bold;
    }
    
    a {
      text-decoration: none;
      color: #000;
      font-style: italic;
    }
    
    a:hover {
      text-decoration: underline;
      color: #000;
    }
    
    .skills {
      
    }
      
    .skills__item {
      margin-bottom: 10px;  
    }
    
    .skills__item .right {
      input {
        display: none;
      }
      
      label {
        display: inline-block;  
        width: 20px;
        height: 20px;
        background: #C3DEF3;
        border-radius: 20px;
        margin-right: 3px;
      }
      
      input:checked + label {
        background: #79A9CE;
      }
    }
  }
  </style>
  <div class="container">
    <div class="header">
      <div class="full-name">
        <span class="first-name">{{fname}}</span> 
        <span class="last-name">{{lname}}</span>
      </div>
      <div class="contact-info">
        <span class="email">Email: </span>
        <span class="email-val">{{email}}</span>
        <span class="separator"></span>
        <span class="phone">Phone: </span>
        <span class="phone-val">{{phone}}</span>
      </div>
      
      <div class="about">
        <span class="position">Front-End Developer </span>
        <span class="desc">
          I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
        </span>
      </div>
    </div>
     <div class="details">
      <div class="section">
        <div class="section__title">Experience</div>
        <div class="section__list">
          <div class="section__list-item">
            <div class="left">
              <div class="name">KlowdBox</div>
              <div class="addr">San Fr, CA</div>
              <div class="duration">Jan 2011 - Feb 2015</div>
            </div>
            <div class="right">
              <div class="name">Fr developer</div>
              <div class="desc">did This and that</div>
            </div>
          </div>
                  <div class="section__list-item">
            <div class="left">
              <div class="name">Akount</div>
              <div class="addr">San Monica, CA</div>
              <div class="duration">Jan 2011 - Feb 2015</div>
            </div>
            <div class="right">
              <div class="name">Fr developer</div>
              <div class="desc">did This and that</div>
            </div>
          </div>
  
        </div>
      </div>
      <div class="section">
        <div class="section__title">Education</div>
        <div class="section__list">
          <div class="section__list-item">
            <div class="left">
              <div class="name">Sample Institute of technology</div>
              <div class="addr">San Fr, CA</div>
              <div class="duration">Jan 2011 - Feb 2015</div>
            </div>
            <div class="right">
              <div class="name">Fr developer</div>
              <div class="desc">did This and that</div>
            </div>
          </div>
          <div class="section__list-item">
            <div class="left">
              <div class="name">Akount</div>
              <div class="addr">San Monica, CA</div>
              <div class="duration">Jan 2011 - Feb 2015</div>
            </div>
            <div class="right">
              <div class="name">Fr developer</div>
              <div class="desc">did This and that</div>
            </div>
          </div>
  
        </div>
        
    </div>
       <div class="section">
        <div class="section__title">Projects</div> 
         <div class="section__list">
           <div class="section__list-item">
             <div class="name">DSP</div>
             <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
           </div>
           
           <div class="section__list-item">
                      <div class="name">DSP</div>
             <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
             </div>
           </div>
         </div>
      </div>
       <div class="section">
         <div class="section__title">Skills</div>
         <div class="skills">
           <div class="skills__item">
             <div class="left"><div class="name">
               Javascript
               </div></div>
             <div class="right">
                            <input  id="ck1" type="checkbox" checked/>
  
               <label for="ck1"></label>
                            <input id="ck2" type="checkbox" checked/>
  
                <label for="ck2"></label>
                           <input id="ck3" type="checkbox" />
  
                <label for="ck3"></label>
                             <input id="ck4" type="checkbox" />
              <label for="ck4"></label>
                            <input id="ck5" type="checkbox" />
                <label for="ck5"></label>
  
             </div>
           </div>
           
         </div>
         <div class="skills__item">
             <div class="left"><div class="name">
               CSS</div></div>
             <div class="right">
                            <input  id="ck1" type="checkbox" checked/>
  
               <label for="ck1"></label>
                            <input id="ck2" type="checkbox" checked/>
  
                <label for="ck2"></label>
                           <input id="ck3" type="checkbox" />
  
                <label for="ck3"></label>
                             <input id="ck4" type="checkbox" />
              <label for="ck4"></label>
                            <input id="ck5" type="checkbox" />
                <label for="ck5"></label>
  
             </div>
           </div>
           
         </div>
       <div class="section">
       <div class="section__title">
         Interests
         </div>
         <div class="section__list">
           <div class="section__list-item">
                    Football, programming.
            </div>
         </div>
       </div>
       </div>
    </div>
  </div>`;

  const template = Handlebars.compile(content);

    return (
      <div className="text-black z-1 absolute w-[80%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[80%] h-[80%] rounded-md shadow-xl bg-gray-400">
        <div className="App">
            <input
              type="text"
              value={userData.lname}
              onChange={(e) => setUserData({ ...userData, lname: e.target.value })}
            />
            <input
              type="text"
              value={userData.fname}
              onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
            />
            <input
              type="text"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <input
              type="text"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <div dangerouslySetInnerHTML={{ __html: template(userData) }} />
          </div>
        </div>
      </div>
    );

}