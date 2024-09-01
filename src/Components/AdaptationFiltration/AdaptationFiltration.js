import { useContext } from "react";
import { MainPageContext } from "../MainPageContext/MainPageContext";
import { SelectComponent } from "../SelectComponent/SelectComponent";

export const AdaptationFiltration = () => {
  const type = ["Все", "Фильм", "Сериал", "Аниме сериал"];

  const country = [
    "Все",
    "США",
    "Канада",
    "Япония",
    "Польша",
    "Германия",
    "Китай",
    "Франция",
  ];

  const genre = [
    "Все",
    "Боевик",
    "Фэнтези",
    "Фантастика",
    "Триллер",
    "Драма",
    "Криминал",
    "Детектив",
    "Аниме",
    "Мультфильм",
    "Ужасы",
    "Приключения",
    "Спорт",
    "Комедия",
  ];

  const series = [
    "Все",
    "Mortal Kombat",
    "Max Payne",
    "Cyberpunk",
    "Halo",
    "The Last of Us",
    "Fallout",
    "Gran Turismo",
    "Super Mario Bros",
    "Warcraft",
    "League of Legends",
  ];

  const { adaptationsArr, setAdaptationsArr } = useContext(MainPageContext);

  const filterAdaptations = (category, value) => {
    if (value != "Все") {
      const filteredAdaptations = adaptationsArr.filter((game) => {
        if (game[category].includes(value)) {
          return true;
        }
      });
      setAdaptationsArr(filteredAdaptations);
    } else if (value === "Все") {
      fetch("https://66ce31f6199b1d6286880fb0.mockapi.io/games/adaptations")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setAdaptationsArr(data);
        });
    }
  };

  return (
    <>
      <div className="filtration-section">
        <div className="filtration-section-title">Тип</div>
        <SelectComponent
          categories={type}
          filterFunc={filterAdaptations}
          categoryName={"type"}
        />
      </div>
      <div className="filtration-section">
        <div className="filtration-section-title">Страна</div>
        <SelectComponent
          categories={country}
          filterFunc={filterAdaptations}
          categoryName={"country"}
        />
      </div>
      <div className="filtration-section">
        <div className="filtration-section-title">Жанры</div>
        <SelectComponent
          categories={genre}
          filterFunc={filterAdaptations}
          categoryName={"genre"}
        />
      </div>
      <div className="filtration-section">
        <div className="filtration-section-title">Серии</div>
        <SelectComponent
          categories={series}
          filterFunc={filterAdaptations}
          categoryName={"series"}
        />
      </div>
    </>
  );
};
