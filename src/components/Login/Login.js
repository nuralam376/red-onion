import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { firebaseSignUp } from "./firebase";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = ({ login }) => {
  const [user, setUser] = useContext(UserContext);
  const [message, setMessage] = useState({});

  const onSubmit = (data) => {
    if (login) {
      console.log("Registration Data", data);
    } else {
      firebaseSignUp(data)
        .then((response) => {
          if (response.additionalUserInfo) {
            setMessage({
              code: 200,
              data: "New User created successfully",
            });
          } else {
            setMessage({
              code: 400,
              data: response,
            });
          }
        })
        .catch((err) => {
          setMessage({
            code: 400,
            data: err,
          });
        });
    }
  };

  return (
    <>
      <div className="login d-flex justify-content-center align-items-center">
        <LoginForm
          login={login}
          onSubmit={onSubmit}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </>
  );
};

export default Login;
