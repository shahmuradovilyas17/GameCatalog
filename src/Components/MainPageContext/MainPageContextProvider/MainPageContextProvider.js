import { useEffect, useState } from "react";
import { MainPageContext } from "../MainPageContext";

export const MainPageContextProvider = ({ children }) => {
  const [popularGamesArr, setPopularGamesArr] = useState([]);
  const [newestGamesArr, setNewestGamesArr] = useState([]);

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
      });
  }, []);
  return (
    <>
      <MainPageContext.Provider value={{ popularGamesArr, newestGamesArr }}>
        {children}
      </MainPageContext.Provider>
    </>
  );
};
