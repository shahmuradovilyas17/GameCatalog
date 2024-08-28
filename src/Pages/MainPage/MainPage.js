import { MainSlider } from "../../Components/MainPageSlider/MainPageSlider";
import { NewestReleases } from "../../Components/NewestReleases/NewestReleases";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <MainSlider />
      <NewestReleases />
    </div>
  );
};
