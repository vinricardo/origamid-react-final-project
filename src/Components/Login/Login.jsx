import React from "react";
import styles from './Login.module.css';
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginCreate from "./components/LoginCreate/LoginCreate";
import LoginPasswordLost from "./components/LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./components/LoginPasswordReset/LoginPasswordReset";

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