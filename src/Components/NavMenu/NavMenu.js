import { Link } from "react-router-dom";
import "./NavMenu.scss";

export const NavMenu = () => {
  return (
    <ul className="header-nav-menu">
      <Link to={"/"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Главная</li>
      </Link>
      <Link to={"/Catalog"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Каталог</li>
      </Link>
      <Link to={"/Media"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">Медиа</li>
      </Link>
      <Link to={"/About"} className="header-nav-menu-link">
        <li className="header-nav-menu-item">О Нас</li>
      </Link>
    </ul>
  );
};
