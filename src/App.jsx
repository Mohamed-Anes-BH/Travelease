import React from "react";
import { Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/forgetPassword";
import SignUp from "./pages/signUp";

function App() {
    return (
        <>
            <Routes>
                
                <Route path="/" element={<Login />} />
            </Routes>
      
        </>
    );
}

export default App;
