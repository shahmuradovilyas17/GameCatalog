// LoginPage.js
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./LoginPage.scss";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userData, setUserLogged, UserLogged } = useContext(MainPageContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (
      userData &&
      (data.loginOrEmail === userData.login ||
        data.loginOrEmail === userData.email) &&
      data.password === userData.password
    ) {
      alert("Login successful!");
      setUserLogged((prevState) => {
        return !prevState;
      });
      navigate("/Profile");
      localStorage.setItem("userLogged", UserLogged);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page-inner">
        <div className="login-page-title">Вход в аккаунт</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-section">
            <label htmlFor="loginOrEmail">Login or Email</label>
            <input
              id="loginOrEmail"
              type="text"
              placeholder="Login or Email"
              {...register("loginOrEmail", {
                required: "Login or Email is required",
              })}
              className={`login-input ${
                errors.loginOrEmail ? "input-error" : ""
              }`}
            />
            {errors.loginOrEmail && (
              <p className="error-message">{errors.loginOrEmail.message}</p>
            )}
          </div>
          <div className="login-section">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className={`login-input ${errors.password ? "input-error" : ""}`}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="login-input-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
