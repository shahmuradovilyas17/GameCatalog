import { NewestGameReleasesItems } from "../NewestGameReleasesItems/NewestGameReleasesItems";
import "./NewestGameReleases.scss";

export const NewestGameReleases = () => {
  return (
    <div className="new-games-inner">
      <div className="new-games-title">Новые игровые релизы</div>
      <div className="new-games-items">
        <NewestGameReleasesItems />
      </div>
    </div>
  );
};
