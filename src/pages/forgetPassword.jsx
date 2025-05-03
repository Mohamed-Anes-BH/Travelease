
import React, { useState } from "react";
import "../css/forgetPassword.css"; // Importing the CSS file for styling
import NavBar from "./NavBar";

function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted for password reset:", email);
        // Add logic to send the email to the backend for password reset
    };

    return (
        <>
            <NavBar />
            <div className="forget-password">
                <form className="forget-password-form" onSubmit={handleSubmit}>
                    <h1>Forget Password</h1>
                    <p>Please enter your email address to reset your password.</p>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p>
                        Code not active. <a href="#">Resend</a>
                    </p>
                    <button type="submit">Get verification code</button>
                    <p>
                        Maybe late? <a href="/">Back to home page</a>
                    </p>
                    
                </form>
            </div>
        </>
    );
}

export default ForgetPassword;
