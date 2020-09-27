import React, { useEffect } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    clearErrors,
    reset,
  } = useForm();

  useEffect(() => {
    clearErrors();
    reset();
  }, [login]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="login d-flex justify-content-center align-items-center">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          {!login && (
            <>
              <input
                name="name"
                ref={register({ required: true })}
                placeholder="Name"
                className="form-control mt-4"
              />

              {errors.email && (
                <span className="text-danger">* This field is required</span>
              )}
            </>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <input
            name="email"
            ref={register({ required: true })}
            className="form-control mt-4"
            placeholder="Email"
            type="email"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-danger">* This field is required</span>
          )}

          <input
            name="password"
            ref={register({ required: true })}
            className="form-control mt-4"
            type="password"
            placeholder="Password"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-danger">* This field is required</span>
          )}

          {!login && (
            <>
              <input
                name="confirmPassword"
                type="password"
                ref={register({ required: true })}
                className="form-control mt-4"
                placeholder="Confirm Password"
              />
              {/* errors will return when field validation fails  */}
              {errors.confirmPassword && (
                <span className="text-danger">* This field is required</span>
              )}
              <br />
            </>
          )}

          <input
            type="submit"
            value={login ? "Login" : "Sign up"}
            className="btn btn-danger mt-2 d-block mx-auto"
          />
        </form>

        <Link
          to={login ? "/signup" : "/login"}
          className="text-danger mt-2 d-block"
        >
          {login ? "Don't have an account" : "Already have an account"}
        </Link>
      </div>
    </div>
  );
};

export default Login;
