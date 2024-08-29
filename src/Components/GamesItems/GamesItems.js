import "./GamesItems.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const GamesItems = ({ gamesArr, nthChild }) => {
  const navigate = useNavigate();

  const marginFunction = (index, nthChild) => {
    if (index % nthChild === 0) {
      return true;
    }
  };

  return (
    <>
      {gamesArr.map((game, index) => {
        return (
          <div
            className="new-games-item"
            key={game.id}
            style={{
              marginRight: marginFunction(index + 1, nthChild) ? 0 : 32.5,
            }}
          >
            <Link to={`/Games/${game.id}`}>
              <img src={game.background_image} alt="game-image" />
            </Link>
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
