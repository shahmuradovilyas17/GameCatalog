import { useEffect, useState } from "react";
import { MainPageContext } from "../MainPageContext";

export const MainPageContextProvider = ({ children }) => {
  const [popularGamesArr, setPopularGamesArr] = useState([]);
  const [newestGamesArr, setNewestGamesArr] = useState([]);
  const [popularAdaptationsArr, setPopularAdaptationsArr] = useState([]);
  const [newestAdaptationsArr, setNewestAdaptationsArr] = useState([]);
  const [gamesArr, setGamesArr] = useState([]);
  const [adaptationsArr, setAdaptationsArr] = useState([]);

  useEffect(() => {
    fetch("https://66ce31f6199b1d6286880fb0.mockapi.io/games/games")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const popularGames = data.filter((game) => {
          if (game.type === "Popular") {
            return true;
          }
          return false;
        });
        setPopularGamesArr(popularGames);
        const newGames = data.filter((game) => {
          if (game.type === "New") {
            return true;
          }
          return false;
        });
        setNewestGamesArr(newGames);
        setGamesArr(data);
      });

    fetch("https://66ce31f6199b1d6286880fb0.mockapi.io/games/adaptations")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const popularAdaptations = data.filter((adaptation) => {
          if (adaptation.category === "popular") {
            return true;
          }
          return false;
        });
        setPopularAdaptationsArr(popularAdaptations);
        const newAdaptations = data.filter((adaptation) => {
          if (adaptation.category === "new") {
            return true;
          }
          return false;
        });
        setNewestAdaptationsArr(newAdaptations);
        setAdaptationsArr(data);
      });
  }, []);

  return (
    <>
      <MainPageContext.Provider
        value={{
          popularGamesArr,
          newestGamesArr,
          popularAdaptationsArr,
          newestAdaptationsArr,
          gamesArr,
          setGamesArr,
          adaptationsArr,
          setAdaptationsArr,
        }}
      >
        {children}
      </MainPageContext.Provider>
    </>
  );
};
