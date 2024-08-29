import "./Banner.scss";

export const Banner = ({ title, img }) => {
  return (
    <div className="banner-inner">
      <div className="banner-img">
        <img src={img} alt="" />
      </div>
      <div className="banner-title">{title}</div>
    </div>
  );
};
