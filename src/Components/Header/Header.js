import { useNavigate } from "react-router";
import { NavMenu } from "../NavMenu/NavMenu";
import "./Header.scss";
import { useContext } from "react";
import { MainPageContext } from "../MainPageContext/MainPageContext";

export const Header = () => {
  const navigate = useNavigate();
  const { userLogged } = useContext(MainPageContext);
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="header-logo">Play N' Watch</div>
        <NavMenu />
        <div className="header-right-panel">
          {userLogged ? (
            <div
              className="header-profile"
              onClick={() => {
                navigate("/Profile");
              }}
            ></div>
          ) : (
            <div className="header-profile-not-logged">
              <div
                className="header-profile-register"
                onClick={() => {
                  navigate("/Register");
                }}
              >
                Зарегистрироваться
              </div>
              <div
                className="header-profile-login"
                onClick={() => [navigate("/Login")]}
              >
                Войти
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
