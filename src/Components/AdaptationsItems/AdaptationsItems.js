import "./AdaptationsItems.scss";
import { Link, useNavigate } from "react-router-dom";

export const AdaptationsItems = ({ adaptationsArr, nthChild }) => {
  const navigate = useNavigate();

  const marginFunction = (index, nthChild) => {
    if (index % nthChild === 0) {
      return true;
    }
  };

  console.log(nthChild);

  return (
    <>
      {adaptationsArr.map((adaptation, index) => {
        return (
          <div
            className="new-adaptations-item"
            key={adaptation.id}
            style={{
              marginRight: marginFunction(index + 1, nthChild)
                ? 0
                : `calc(140px / ${nthChild - 1})`,
            }}
          >
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
