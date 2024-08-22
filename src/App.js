import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
