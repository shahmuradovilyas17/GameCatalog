import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Header } from "./Components/Header/Header";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
