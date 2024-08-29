import { Banner } from "../../Components/Banner/Banner";
import "./AdaptationsPage.scss";
import adaptationBanner from "../../Assets/Images/gamingBanner.jpg";
import { AdaptationsItems } from "../../Components/AdaptationsItems/AdaptationsItems";
import { useContext } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";

export const AdaptationsPage = () => {
  const title = "Каталог Адаптаций";

  const { adaptationsArr, setAdaptationsArr } = useContext(MainPageContext);
  return (
    <div className="adaptations-page-wrapper">
      <Banner title={title} img={adaptationBanner} />
      <div className="adaptations-page-container">
        <AdaptationsItems adaptationsArr={adaptationsArr} nthChild={4} />
      </div>
    </div>
  );
};
