// RegisterPage.js
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./RegisterPage.scss";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUserData } = useContext(MainPageContext); // Get the setUser function from context

  const onSubmit = (data) => {
    console.log(data);
    setUserData(data);
    navigate("/Login");
  };

  return (
    <div className="register-page-wrapper">
      <div className="register-page-inner">
        <div className="register-page-title">Регистрация</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register-section">
            <label htmlFor="login">Login</label>
            <input
              id="login"
              type="text"
              placeholder="Login"
              {...register("login", {
                required: "Login is required",
                minLength: {
                  value: 6,
                  message: "Login must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*\d).+$/,
                  message: "Login must contain at least one digit",
                },
              })}
              className={`register-input ${errors.login ? "input-error" : ""}`}
            />
            {errors.login && (
              <p className="error-message">{errors.login.message}</p>
            )}
          </div>
          <div className="register-section">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className={`register-input ${errors.name ? "input-error" : ""}`}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
          <div className="register-section">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`register-input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="register-section">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Password must include at least one letter, one digit, and one special character",
                },
              })}
              className={`register-input ${
                errors.password ? "input-error" : ""
              }`}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="register-input-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
