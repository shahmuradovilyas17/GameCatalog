import { Banner } from "../../Components/Banner/Banner";
import "./AdaptationsPage.scss";
import adaptationBanner from "../../Assets/Images/gamingBanner.jpg";
import { AdaptationsItems } from "../../Components/AdaptationsItems/AdaptationsItems";
import { useContext } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { AdaptationFiltration } from "../../Components/AdaptationFiltration/AdaptationFiltration";

export const AdaptationsPage = () => {
  const title = "Каталог Адаптаций";

  const { adaptationsArr } = useContext(MainPageContext);
  return (
    <div className="adaptations-page-wrapper">
      <Banner title={title} img={adaptationBanner} />
      <div className="adaptations-page-container">
        <div className="adaptations-page-container-filtration">
          <div className="adaptations-page-container-filtration-title">
            Фильтрация
          </div>
          <AdaptationFiltration />
        </div>
        <div className="adaptations-page-container-items">
          <AdaptationsItems adaptationsArr={adaptationsArr} nthChild={3} />
        </div>
      </div>
    </div>
  );
};
