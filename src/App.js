import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { MainPageContextProvider } from "./Components/MainPageContext/MainPageContextProvider/MainPageContextProvider";
import { GamesPage } from "./Pages/GamesPage/GamesPage";
import { SelectedGamePage } from "./Pages/SelectedGamePage/SelectedGamePage";
import { AdaptationsPage } from "./Pages/AdaptationsPage/AdaptationsPage";
import { SelectedAdaptationPage } from "./Pages/SelectedAdaptationPage/SelectedAdaptationPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

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
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Games/:GameId" element={<SelectedGamePage />} />
            <Route
              path="/Adaptations/:AdaptationId"
              element={<SelectedAdaptationPage />}
            />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MainPageContextProvider>
    </>
  );
};
