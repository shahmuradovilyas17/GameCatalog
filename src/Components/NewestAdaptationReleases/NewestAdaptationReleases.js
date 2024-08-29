import { useContext } from "react";
import { AdaptationsItems } from "../AdaptationsItems/AdaptationsItems";
import "./NewestAdaptationReleases.scss";
import { MainPageContext } from "../MainPageContext/MainPageContext";

export const NewestAdaptationReleases = () => {
  const { newestAdaptationsArr } = useContext(MainPageContext);

  return (
    <div className="new-adaptations-inner">
      <div className="new-adaptations-title">
        Новые релизы игровый адаптаций
      </div>
      <div className="new-adaptations-items">
        <AdaptationsItems adaptationsArr={newestAdaptationsArr} />
      </div>
    </div>
  );
};
