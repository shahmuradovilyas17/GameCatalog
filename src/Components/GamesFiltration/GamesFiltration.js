import { useContext } from "react";
import "./GamesFiltration.scss";
import { MainPageContext } from "../MainPageContext/MainPageContext";
import { SelectComponent } from "../SelectComponent/SelectComponent";

export const GamesFiltration = () => {
  const genres = ["Все", "Экшены", "Шутеры", "Ролевые", "Приключения", "ММО"];
  const platforms = [
    "Все",
    "PlayStation 5",
    "Xbox Series S/X",
    "Xbox One",
    "PC",
    "Nintendo Switch",
    "PlayStation 4",
    "Linux",
    "Xbox 360",
    "PlayStation 3",
  ];
  const developers = [
    "Все",
    "3D Realms",
    "One More Level",
    "Slipgate Ironworks™",
    "All in! Games",
    "505 Games",
    "OVERKILL Software",
    "Bethesda Softworks",
    "Arkane Studios",
    "4A Games",
    "Game Science",
    "Ninja Theory",
    "Ubisoft Singapore",
  ];
  const series = [
    "Все",
    "Ghostrunner",
    "PAYDAY",
    "Dishonored",
    "Metro",
    "Black Myth: Wu Kong",
    "Hellblade",
    "Skull & Bones",
  ];

  const { gamesArr, setGamesArr } = useContext(MainPageContext);

  const filterGames = (category, value) => {
    if (value != "Все") {
      const filteredGames = gamesArr.filter((game) => {
        if (game[category].includes(value)) {
          return true;
        }
      });
      setGamesArr(filteredGames);
    } else if (value === "Все") {
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
    <>
      <div className="filtration-section">
        <div className="filtration-section-title">Жанры</div>
        <SelectComponent
          categories={genres}
          filterFunc={filterGames}
          categoryName={"genres"}
        />
      </div>
      <div className="filtration-section">
        <div className="filtration-section-title">Платформы</div>
        <SelectComponent
          categories={platforms}
          filterFunc={filterGames}
          categoryName={"platforms"}
        />
      </div>
      <div className="filtration-section">
        <div className="filtration-section-title">Разработчики</div>
        <SelectComponent
          categories={developers}
          filterFunc={filterGames}
          categoryName={"developers"}
        />
      </div>
      <div className="filtration-section">
        <div className="filtration-section-title">Серии</div>
        <SelectComponent
          categories={series}
          filterFunc={filterGames}
          categoryName={"series"}
        />
      </div>
    </>
  );
};
