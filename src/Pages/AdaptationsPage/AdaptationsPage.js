import { Banner } from "../../Components/Banner/Banner";
import "./AdaptationsPage.scss";
import adaptationBanner from "../../Assets/Images/gamingBanner.jpg";

export const AdaptationsPage = () => {
  const title = "Каталог Адаптаций";
  return (
    <div className="adaptations-page-wrapper">
      <Banner title={title} img={adaptationBanner} />
    </div>
  );
};
