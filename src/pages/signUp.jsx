import React from "react";
import "../css/signUp.css"; // Importing the CSS file for styling
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";

function SignUp() {
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [name1, setName1] = useState('');
     const [name2, setName2] = useState('');
 
   return (
     <div className="loginContainer">
         <h1 id="aaa">Welcome to Travelease</h1>
       <form id='loginForm'>
       <h1>Create account </h1>
       <div className="firstLastName">
          <div className="inputGroup">
           <label htmlFor="username" style={{color:"black"}}>First name:</label>
           <input type="text" id="firstName" name="firstName" value={name1} onChange={(e)=>setName1(e.target.value)}
            required />
          </div>
          <div className="inputGroup">
           <label htmlFor="username">Last name:</label>
           <input type="email" id="username" name="lastName" value={name2} onChange={(e)=>setName2(e.target.value)}
            required />
          </div>
        </div>
       
         <div className="inputGroup">
           <label htmlFor="username">Email:</label>
           <input type="email" id="username" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
          required />
         </div>
         <div className="inputGroup">
           <label htmlFor="password">Password:</label>
           <input type="password" id="password" name="password" required />
         </div>
         <p>We will send you an email to confirm your .<a href='#'>Privacy policy </a></p>
         <button type="submit" id='continue'> Continue </button>
         <p> Forget your password? <a href="#">Change Password</a> </p>
         <hr />
         <p id='or'> or </p>
           <div className="socialLogin">
                 <button className='socialButton'>
                 <BiLogoGmail /> continue with gmail
                 </button>
               </div>
       </form>
     </div>
  );
}
export default SignUp;
