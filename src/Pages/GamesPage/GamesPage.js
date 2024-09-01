import { Banner } from "../../Components/Banner/Banner";
import "./GamesPage.scss";
import gameBanner from "../../Assets/Images/gamingBanner2.jpg";
import { useContext } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { GamesItems } from "../../Components/GamesItems/GamesItems";
import { GamesFiltration } from "../../Components/GamesFiltration/GamesFiltration";

export const GamesPage = () => {
  const title = "Каталог Игр";

  const { gamesArr, setGamesArr } = useContext(MainPageContext);

  const searchGames = (input) => {
    if (input !== "") {
      const newArr = gamesArr.filter((game) => {
        if (game.name.toLowerCase().includes(input.toLowerCase())) {
          return true;
        }
      });

      setGamesArr(newArr);
    } else {
      fetch("https://66ce31f6199b1d6286880fb0.mockapi.io/games/games")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setGamesArr(data);
        });
    }
  };
  return (
    <div className="games-page-wrapper">
      <Banner title={title} img={gameBanner} />
      <div className="games-page-container">
        <div className="games-page-container-search-filtration">
          <div className="games-page-container-search">
            <div className="games-page-container-search-title">Поиск</div>
            <input
              type="text"
              onChange={(e) => {
                searchGames(e.target.value);
              }}
            />
          </div>
          <div className="games-page-container-filtration">
            <div className="games-page-container-filtration-title">
              Фильтрация
            </div>
            <GamesFiltration />
          </div>
        </div>

        <div className="games-page-container-items">
          <GamesItems gamesArr={gamesArr} nthChild={2} />
        </div>
      </div>
    </div>
  );
};
