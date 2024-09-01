import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useContext } from "react";
import "./MainPageSlider.scss";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MainPageContext } from "../MainPageContext/MainPageContext";
import { useNavigate } from "react-router";

export const MainSlider = () => {
  const { popularGamesArr } = useContext(MainPageContext);

  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      navigation
      autoplay
      className="top-slider"
    >
      {popularGamesArr.map((game) => {
        return (
          <SwiperSlide key={game.id}>
            <div className="slider-item">
              <img
                src={game.background_image}
                alt="game-image"
                className="slider-item-image"
              />
              <button
                className="slider-item-link-button"
                onClick={() => {
                  navigate(`/Games/${game.id}`);
                }}
              >
                Об Игре
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
