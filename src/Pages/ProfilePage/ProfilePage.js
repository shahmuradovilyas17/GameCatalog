import { useSelector } from "react-redux";
import "./ProfilePage.scss";

export const ProfilePage = () => {
  const userObj = {
    nickname: "Fallen",
    name: "Ilyas",
    age: 20,
    registerDate: "1 сентября 2024 г.",
    gog: "https://www.gog.com/u/1lyas20",
    steam: "https://steamcommunity.com/profiles/76561198317305968/",
  };

  const playingData = useSelector((state) => {
    return state.playing;
  });
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
              Nickname: {userObj.nickname}
            </div>
            <div className="profile-user-content-info-text">
              Name: {userObj.name}
            </div>
            <div className="profile-user-content-info-text">
              Age: {userObj.age}
            </div>
            <div className="profile-user-content-info-text">
              Registered: {userObj.registerDate}
            </div>
            <div className="profile-user-content-info-text">
              <a href={userObj.steam}>Steam Profile</a>
            </div>
            <div className="profile-user-content-info-text">
              <a href={userObj.gog}>GOG Profile</a>
            </div>
          </div>
        </div>

        <div className="profile-user-games">
          <div className="profile-user-games-title">Добавленные Игры</div>
          <div className="profile-user-games-buttons">
            <button>В планах</button>
            <button>Играю</button>
            <button>Пройдено</button>
            <button>Заброшено</button>
          </div>
          <div className="profile-user-games-list">
            {playingData.map((game) => {
              return <div>{game.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
