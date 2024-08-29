import { NewestAdaptationReleasesItems } from "../NewestAdaptationReleasesItems/NewestAdaptationReleasesItems";
import "./NewestAdaptationReleases.scss";

export const NewestAdaptationReleases = () => {
  return (
    <div className="new-adaptations-inner">
      <div className="new-adaptations-title">
        Новые релизы игровый адаптаций
      </div>
      <div className="new-adaptations-items">
        <NewestAdaptationReleasesItems />
      </div>
    </div>
  );
};
