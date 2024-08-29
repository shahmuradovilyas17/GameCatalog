import { Banner } from "../../Components/Banner/Banner";
import "./GamesPage.scss";
import gameBanner from "../../Assets/Images/gamingBanner2.jpg";
import { useContext } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { GamesItems } from "../../Components/GamesItems/GamesItems";

export const GamesPage = () => {
  const title = "Каталог Игр";

  const { gamesArr, setGamesArr } = useContext(MainPageContext);
  return (
    <div className="games-page-wrapper">
      <Banner title={title} img={gameBanner} />
      <div className="games-page-container">
        <div className="games-page-container-games">
          <GamesItems gamesArr={gamesArr} nthChild={2} />
        </div>
        <div className="games-page-container-filtration"></div>
      </div>
    </div>
  );
};
