import { useContext } from "react";
import { GamesItems } from "../GamesItems/GamesItems";
import "./NewestGameReleases.scss";
import { MainPageContext } from "../MainPageContext/MainPageContext";

export const NewestGameReleases = () => {
  const { newestGamesArr } = useContext(MainPageContext);

  return (
    <div className="new-games-inner">
      <div className="new-games-title">Новые игровые релизы</div>
      <div className="new-games-items">
        <GamesItems gamesArr={newestGamesArr} nthChild={3} />
      </div>
    </div>
  );
};
