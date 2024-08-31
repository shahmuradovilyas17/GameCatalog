import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { MainPageContextProvider } from "./Components/MainPageContext/MainPageContextProvider/MainPageContextProvider";
import { GamesPage } from "./Pages/GamesPage/GamesPage";
import { SelectedGamePage } from "./Pages/SelectedGamePage/SelectedGamePage";
import { AdaptationsPage } from "./Pages/AdaptationsPage/AdaptationsPage";

export const App = () => {
  return (
    <>
      <MainPageContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Games" element={<GamesPage />} />
            <Route path="/Adaptations" element={<AdaptationsPage />} />
            <Route path="/Profile" element={<MainPage />} />
            <Route path="/Games/:GameId" element={<SelectedGamePage />} />
            <Route
              path="/Adaptations/:AdaptationId"
              element={<SelectedGamePage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MainPageContextProvider>
    </>
  );
};
