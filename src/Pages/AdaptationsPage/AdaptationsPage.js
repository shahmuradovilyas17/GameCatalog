import { Banner } from "../../Components/Banner/Banner";
import "./AdaptationsPage.scss";
import adaptationBanner from "../../Assets/Images/gamingBanner.jpg";
import { AdaptationsItems } from "../../Components/AdaptationsItems/AdaptationsItems";
import { useContext } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { AdaptationFiltration } from "../../Components/AdaptationFiltration/AdaptationFiltration";

export const AdaptationsPage = () => {
  const title = "Каталог Адаптаций";

  const { adaptationsArr, setAdaptationsArr } = useContext(MainPageContext);

  const searchAdaptation = (input) => {
    if (input !== "") {
      const newArr = adaptationsArr.filter((adaptation) => {
        if (
          adaptation.name.toLowerCase().includes(input.toLowerCase()) ||
          adaptation.original_name.toLowerCase().includes(input.toLowerCase())
        ) {
          return true;
        }
      });

      setAdaptationsArr(newArr);
    } else {
      fetch("https://66ce31f6199b1d6286880fb0.mockapi.io/games/adaptations")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setAdaptationsArr(data);
        });
    }
  };
  return (
    <div className="adaptations-page-wrapper">
      <Banner title={title} img={adaptationBanner} />
      <div className="adaptations-page-container">
        <div className="adaptations-page-container-search-filtration">
          <div className="adaptations-page-container-search">
            <div className="adaptations-page-container-search-title">Поиск</div>
            <input
              type="text"
              onChange={(e) => {
                searchAdaptation(e.target.value);
              }}
            />
          </div>
          <div className="adaptations-page-container-filtration">
            <div className="adaptations-page-container-filtration-title">
              Фильтрация
            </div>
            <AdaptationFiltration />
          </div>
        </div>
        <div className="adaptations-page-container-items">
          <AdaptationsItems adaptationsArr={adaptationsArr} nthChild={3} />
        </div>
      </div>
    </div>
  );
};
