import { useContext } from "react";
import "./NewestAdaptationReleasesItems.scss";
import { MainPageContext } from "../MainPageContext/MainPageContext";
import { Link, useNavigate } from "react-router-dom";

export const NewestAdaptationReleasesItems = () => {
  const { newestAdaptationsArr } = useContext(MainPageContext);
  const navigate = useNavigate();
  return (
    <>
      {newestAdaptationsArr.map((adaptation) => {
        return (
          <div className="new-adaptations-item" key={adaptation.id}>
            <Link to={`/Adaptations/${adaptation.id}`}>
              <img src={adaptation.poster} alt="adaptation-image" />
            </Link>
            <div className="new-adaptations-item-content">
              <div className="new-adaptations-item-content-text">
                <div className="new-adaptations-item-content-text-name">
                  {adaptation.name}
                </div>
                <div className="new-adaptations-item-content-text-release-date">
                  {adaptation.release}
                </div>
              </div>
              <button
                className="new-adaptations-item-content-link-button"
                onClick={() => {
                  navigate(`/Adaptations/${adaptation.id}`);
                }}
              >
                Подробнее
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
