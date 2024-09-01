import { useNavigate } from "react-router";
import { NavMenu } from "../NavMenu/NavMenu";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="header-logo">Play N' Watch</div>
        <NavMenu />
        <div className="header-right-panel">
          <div
            className="header-profile"
            onClick={() => {
              navigate("/Profile");
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
