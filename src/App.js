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
          <Route path="/Catalog" element={<MainPage />} />
          <Route path="/Media" element={<MainPage />} />
          <Route path="/About" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
