import { useParams } from "react-router";
import "./SelectedAdaptationPage.scss";
import { useContext, useState } from "react";
import { MainPageContext } from "../../Components/MainPageContext/MainPageContext";
import { SelectedGameSection } from "../../Components/SelectedGameSection/SelectedGameSection";
import { useDispatch } from "react-redux";
import {
  completedAdaptationsAction,
  plannedAdaptationsAction,
  throwAdaptationsAction,
  watchingAdaptationsAction,
} from "../../Store/Library/actions";

export const SelectedAdaptationPage = () => {
  const aId = useParams();

  const { adaptationsArr } = useContext(MainPageContext);

  const [buttonVisibility, setButtonVisibility] = useState(false);

  const changeVisibility = () => {
    setButtonVisibility((prevState) => {
      return !prevState;
    });
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="selected-adaptation-wrapper">
        {adaptationsArr.map((adaptation) => {
          if (adaptation.id === aId.AdaptationId) {
            return (
              <div className="selected-adaptation-inner">
                <div className="selected-adaptation-info">
                  <div className="selected-adaptation-poster">
                    <img src={adaptation.poster} alt="poster" />
                  </div>
                  <div className="selected-adaptation-info-text">
                    <div className="selected-adaptation-name">
                      {adaptation.name}
                    </div>
                    <div className="selected-adaptation-type">
                      {adaptation.type}
                    </div>
                    <div className="selected-adaptation-section">
                      Дата выхода: {adaptation.release}
                    </div>
                    <div className="selected-adaptation-section">
                      Страна:
                      <SelectedGameSection arr={adaptation.country} />
                    </div>
                    <div className="selected-adaptation-section">
                      Жанр:
                      <SelectedGameSection arr={adaptation.genre} />
                    </div>

                    <div className="selected-adaptation-section">
                      Сезоны: {adaptation.seasons}
                    </div>
                    <div className="selected-adaptation-section">
                      Эпизоды: {adaptation.episodes}
                    </div>
                    <div className="selected-adaptation-section">
                      Рейтинг: {adaptation.rating}
                    </div>
                    <div className="selected-adaptation-section">
                      Бюджет: ${adaptation.budget}
                    </div>
                    <div className="selected-adaptation-section">
                      Сборы: ${adaptation.boxoffice}
                    </div>
                    <div className="selected-adaptation-section">
                      Длительность: {adaptation.time}
                    </div>
                    <button
                      onClick={changeVisibility}
                      className={
                        buttonVisibility
                          ? "selected-adaptation-profile-button-active"
                          : "selected-adaptations-profile-button"
                      }
                    >
                      Добавить в библиотеку
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-adaptations-profile-button-visible"
                      onClick={() => {
                        dispatch(watchingAdaptationsAction(adaptation));
                      }}
                    >
                      Смотрю
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-adaptations-profile-button-visible"
                      onClick={() => {
                        dispatch(completedAdaptationsAction(adaptation));
                      }}
                    >
                      Просмотрено
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-adaptations-profile-button-visible"
                      onClick={() => {
                        dispatch(throwAdaptationsAction(adaptation));
                      }}
                    >
                      Брошено
                    </button>
                    <button
                      style={{ display: buttonVisibility ? "block" : "none" }}
                      className="selected-adaptations-profile-button-visible"
                      onClick={() => {
                        dispatch(plannedAdaptationsAction(adaptation));
                      }}
                    >
                      В планах
                    </button>
                  </div>
                  <div className="selected-adaptation-cast">
                    <div className="selected-adaptation-cast-title">
                      В ролях
                    </div>
                    <div className="selected-adaptation-cast-names">
                      <SelectedGameSection arr={adaptation.cast} />
                    </div>
                  </div>
                </div>
                <div className="selected-adaptation-description">
                  {adaptation.description}
                </div>
                <div className="selected-adaptation-images">
                  {adaptation.images.map((image) => {
                    return (
                      <div className="selected-adaptation-image">
                        <img src={image} alt="adaptation-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
