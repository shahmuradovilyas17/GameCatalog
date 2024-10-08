import "./Footer.scss";
import { NavMenu } from "../NavMenu/NavMenu";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-inner">
        <div className="footer-logo">Play N' Watch</div>
        <NavMenu />
        <div className="footer-desc">
          <div className="footer-desc-author">Автор: Ilyas Shahmuradov</div>
          <div className="footer-desc-references">
            Макеты: VkPlay & StopGame & Кинопоиск
          </div>
          <div className="footer-desc-references">
            Данные: Кинопоиск & AG.RU
          </div>
          <div className="footer-desc-year">Год: 2024</div>
        </div>
      </div>
    </div>
  );
};
