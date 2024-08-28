import { NewestReleasesItems } from "../NewestReleasesItems/NewestReleasesItems";
import "./NewestReleases.scss";

export const NewestReleases = () => {
  return (
    <div className="new-games-inner">
      <div className="new-games-title">Новые игровые релизы</div>
      <div className="new-games-items">
        <NewestReleasesItems />
      </div>
    </div>
  );
};
