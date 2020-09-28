import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = ({ login }) => {
  const onSubmit = (data) => {
    if (login) {
      console.log("Login Data", data);
    } else {
      console.log("Registration Data", data);
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-center">
      <LoginForm login={login} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
