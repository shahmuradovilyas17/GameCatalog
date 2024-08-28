import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import "./MainPageSlider.scss";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const MainSlider = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://66ce31f6199b1d6286880fb0.mockapi.io/games/games")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const popularGames = data.filter((game) => {
          if (game.type === "Popular") {
            return true;
          }
          return false;
        });
        setGames(popularGames);
      });
  }, []);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      navigation
      // autoplay
      className="top-slider"
    >
      {games.map((game) => {
        return (
          <SwiperSlide key={game.id}>
            <div className="slider-item">
              <img
                src={game.background_image}
                alt="game-image"
                className="slider-item-image"
              />
              <button className="slider-item-link-button">Об Игре</button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
