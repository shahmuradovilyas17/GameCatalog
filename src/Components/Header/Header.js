import { NavMenu } from "../NavMenu/NavMenu";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="header-logo">RockNPlay</div>
        <NavMenu />
        <div className="header-right-panel">
          <div className="header-search"></div>
          <div className="header-theme"></div>
          <div className="header-profile"></div>
        </div>
      </div>
    </div>
  );
};
