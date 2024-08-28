import { useContext } from "react";
import { MainPageContext } from "../MainPageContext/MainPageContext";

export const NewestReleases = () => {
  const { newestGamesArr } = useContext(MainPageContext);
  return (
    <>
      {newestGamesArr.map((game) => {
        return (
          <div className="new-games-item">
            <div className="new-games-item-img">
              <img src={game.background_image} alt="game-image" />
            </div>
            <div className="new-games-item-name">{game.name}</div>
            <div className="new-games-item-release-date">{game.date}</div>
          </div>
        );
      })}
    </>
  );
};
