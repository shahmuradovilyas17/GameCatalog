import { MainSlider } from "../../Components/MainPageSlider/MainPageSlider";
import { NewestAdaptationReleases } from "../../Components/NewestAdaptationReleases/NewestAdaptationReleases";
import { NewestGameReleases } from "../../Components/NewestGameReleases/NewestGameReleases";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <MainSlider />
      <NewestGameReleases />
      <NewestAdaptationReleases />
    </div>
  );
};
