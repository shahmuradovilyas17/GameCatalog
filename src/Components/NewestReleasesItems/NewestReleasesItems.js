import { useContext } from "react";
import { MainPageContext } from "../MainPageContext/MainPageContext";
import "./NewestReleasesItems.scss";
import { useNavigate } from "react-router";

export const NewestReleasesItems = () => {
  const { newestGamesArr } = useContext(MainPageContext);

  const navigate = useNavigate();

  return (
    <>
      {newestGamesArr.map((game) => {
        return (
          <div className="new-games-item">
            <img src={game.background_image} alt="game-image" />
            <div className="new-games-item-content">
              <div className="new-games-item-content-text">
                <div className="new-games-item-content-text-name">
                  {game.name}
                </div>
                <div className="new-games-item-content-text-release-date">
                  {game.date}
                </div>
              </div>
              <button
                className="new-games-item-content-link-button"
                onClick={() => {
                  navigate(`/Games/${game.id}`);
                }}
              >
                Подробнее
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
