import { useSelector } from "react-redux";
import "./ProfilePage.scss";
import { useContext, useState } from "react";
import { GamesItems } from "../../Components/GamesItems/GamesItems";
import { AdaptationsItems } from "../../Components/AdaptationsItems/AdaptationsItems";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";

export const ProfilePage = () => {
  const userObj = {
    nickname: "Fallen",
    name: "Ilyas",
    age: 20,
    registerDate: "1 сентября 2024 г.",
    gog: "https://www.gog.com/u/1lyas20",
    steam: "https://steamcommunity.com/profiles/76561198317305968/",
  };

  const { userData } = useContext(MainPageContext);
  console.log(userData);

  let libraryGames = {};
  let libraryAdaptations = {};

  const playingGamesData = useSelector((state) => {
    return (libraryGames = {
      playing: state.playingGames,
      completed: state.completedGames,
      throw: state.throwGames,
      planned: state.plannedGames,
    });
  });

  const watchingAdaptationsData = useSelector((state) => {
    return (libraryAdaptations = {
      watching: state.watchingAdaptations,
      completed: state.completedAdaptations,
      throw: state.throwAdaptations,
      planned: state.plannedAdaptations,
    });
  });

  const [gamesLibrary, setGamesLibrary] = useState([]);
  const [adaptationsLibrary, setAdaptationsLibrary] = useState([]);

  return (
    <div className="profile-wrapper">
      <div className="profile-inner">
        <div className="profile-user-content">
          <div className="profile-user-content-image">
            <img
              src="https://avatars.akamai.steamstatic.com/1351d4d4f5a06478b5614f33c5c4aae3f6755576_full.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="profile-user-content-info">
            <div className="profile-user-content-info-text">
              Nickname: {userData.login}
            </div>
            <div className="profile-user-content-info-text">
              Name: {userData.name}
            </div>

            <div className="profile-user-content-info-text">
              <a href={userObj.steam}>Steam Profile</a>
            </div>
            <div className="profile-user-content-info-text">
              <a href={userObj.gog}>GOG Profile</a>
            </div>
          </div>
        </div>

        <div className="profile-user-section">
          <div className="profile-user-section-title">Добавленные Игры</div>
          <div className="profile-user-section-buttons">
            <button
              onClick={() => {
                setGamesLibrary(libraryGames.planned);
              }}
            >
              В планах
            </button>
            <button
              onClick={() => {
                setGamesLibrary(libraryGames.playing);
              }}
            >
              Играю
            </button>
            <button
              onClick={() => {
                setGamesLibrary(libraryGames.completed);
              }}
            >
              Пройдено
            </button>
            <button
              onClick={() => {
                setGamesLibrary(libraryGames.throw);
              }}
            >
              Заброшено
            </button>
            <button
              onClick={() => {
                setGamesLibrary([]);
              }}
            >
              Закрыть
            </button>
          </div>
          <div className="profile-user-section-list">
            <GamesItems gamesArr={gamesLibrary} nthChild={3} />
          </div>
        </div>
        <div className="profile-user-section">
          <div className="profile-user-section-title">
            Добавленные Адаптации
          </div>
          <div className="profile-user-section-buttons">
            <button
              onClick={() => {
                setAdaptationsLibrary(libraryAdaptations.planned);
              }}
            >
              В планах
            </button>
            <button
              onClick={() => {
                setAdaptationsLibrary(libraryAdaptations.watching);
              }}
            >
              Смотрю
            </button>
            <button
              onClick={() => {
                setAdaptationsLibrary(libraryAdaptations.completed);
              }}
            >
              Просмотрено
            </button>
            <button
              onClick={() => {
                setAdaptationsLibrary(libraryAdaptations.throw);
              }}
            >
              Заброшено
            </button>
            <button
              onClick={() => {
                setAdaptationsLibrary([]);
              }}
            >
              Закрыть
            </button>
          </div>
          <div className="profile-user-section-list">
            <AdaptationsItems
              nthChild={4}
              adaptationsArr={adaptationsLibrary}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
