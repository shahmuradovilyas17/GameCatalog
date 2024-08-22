import { useNavigate } from "react-router";
import "./NavMenu.scss";

export const NavMenu = () => {
  const navigate = useNavigate();
  return (
    <ul className="header-nav-menu">
      <li
        className="header-nav-menu-item"
        onClick={() => {
          navigate("/");
        }}
      >
        Главная
      </li>
      <li className="header-nav-menu-item">Каталог</li>
      <li className="header-nav-menu-item">О Нас</li>
    </ul>
  );
};
