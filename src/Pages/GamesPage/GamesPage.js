import { Banner } from "../../Components/Banner/Banner";
import "./GamesPage.scss";
import gameBanner from "../../Assets/Images/gamingBanner2.jpg";

export const GamesPage = () => {
  const title = "Каталог Игр";
  return (
    <div className="games-page-wrapper">
      <Banner title={title} img={gameBanner} />
    </div>
  );
};
