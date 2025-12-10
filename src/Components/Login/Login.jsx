import React from "react";
import styles from './Login.module.css';
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import LoginCreate from "./Components/LoginCreate/LoginCreate";
import LoginPasswordLost from "./Components/LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./Components/LoginPasswordReset/LoginPasswordReset";

const Login = () => {
    return <div>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="create" element={<LoginCreate />} />
            <Route path="recover" element={<LoginPasswordLost />} />
            <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
    </div>
}

export default Login;