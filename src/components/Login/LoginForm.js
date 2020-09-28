import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = ({ login, onSubmit }) => {
  const {
    register,
    handleSubmit,
    errors,
    watch,
    clearErrors,
    reset,
  } = useForm();

  useEffect(() => {
    clearErrors();
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  return (
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

            {errors.name && (
              <span className="text-danger">* This field is required</span>
            )}
          </>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          className="form-control mt-4"
          placeholder="Email"
          type="email"
        />
        {/* errors will return when field validation fails  */}
        {errors.email && (
          <span className="text-danger">* Email must be valid</span>
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
              ref={register({
                required: true,
                validate: (value) => value === watch("password"),
              })}
              className="form-control mt-4"
              placeholder="Confirm Password"
            />
            {/* errors will return when field validation fails  */}
            {errors.confirmPassword && (
              <span className="text-danger">* Passwords must be matched</span>
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
  );
};

export default LoginForm;
