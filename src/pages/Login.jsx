import '../css/Login.css';
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react"
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", { email, password });
        // Add logic to authenticate the user with the backend
    };

    const handleGmailLogin = () => {
        console.log("Gmail login clicked");
        // Add Gmail login logic here
    };

    return (  
        <div className="loginContainer">
            <h1 id="welcome">Welcome to Travelease</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="inputGroup">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <p>
                    We will send you an email to confirm your 
                    <a href="#"> Privacy policy </a>
                </p>
                <button type="submit" id="continue">Continue</button>
                <p>
                    Forget your password? <a href="/forget-password">Change Password</a>
                </p>
                <hr />
                <p id="or">or</p>
                <div className="socialLogin">
                    <button className="socialButton" onClick={handleGmailLogin}>
                        <BiLogoGmail /> Continue with Gmail
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;