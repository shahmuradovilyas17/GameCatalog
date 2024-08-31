import { Link } from "react-router-dom";
import "./NavMenu.scss";

export const NavMenu = () => {
  return (
    <ul className="header-nav-menu">
      <Link to={"/"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Главная</li>
      </Link>
      <Link to={"/Games"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Игры</li>
      </Link>
      <Link to={"/Adaptations"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Адаптации</li>
      </Link>
      <Link to={"/Profile"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Профиль</li>
      </Link>
    </ul>
  );
};
