import { useParams } from "react-router";
import "./SelectedGamePage.scss";
import { useContext, useState } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { SelectedGameSection } from "../../Components/SelectedGameSection/SelectedGameSection";

export const SelectedGamePage = () => {
  const gId = useParams();

  const { gamesArr } = useContext(MainPageContext);

  const [buttonVisibility, setButtonVisibility] = useState(false);

  const changeVisibility = () => {
    setButtonVisibility((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="selected-game-wrapper">
        {gamesArr.map((game) => {
          if (game.id === gId.GameId) {
            return (
              <div className="selected-game-inner">
                <div className="selected-game-info">
                  <div className="selected-game-poster">
                    <img src={game.background_image} alt="poster" />
                  </div>
                  <div className="selected-game-info-text">
                    <div className="selected-game-name">{game.name}</div>
                    <div className="selected-game-section">
                      Дата выхода: {game.date}
                    </div>
                    <div className="selected-game-section">
                      Платформы: <SelectedGameSection arr={game.platforms} />
                    </div>
                    <div className="selected-game-section">
                      Разработчики:{" "}
                      <SelectedGameSection arr={game.developers} />
                    </div>
                    <div className="selected-game-section">
                      Издатели: <SelectedGameSection arr={game.publisher} />
                    </div>
                    <div className="selected-game-section">
                      Страница игры:{" "}
                      {game.stores.map((item) => {
                        return <a href={item.store_url}>{item.store}</a>;
                      })}
                    </div>
                    <button
                      onClick={changeVisibility}
                      className={
                        buttonVisibility
                          ? "selected-game-profile-button-active"
                          : "selected-games-profile-button"
                      }
                    >
                      Добавить в библиотеку
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-games-profile-button-visible"
                    >
                      Играю
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-games-profile-button-visible"
                    >
                      Пройдено
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-games-profile-button-visible"
                    >
                      Заброшено
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-games-profile-button-visible"
                    >
                      В планах
                    </button>
                  </div>
                </div>
                <div className="selected-game-images">
                  {game.images.map((image) => {
                    return (
                      <div className="selected-game-image">
                        <img src={image} alt="game-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
