import "./SelectedGameSection.scss";

export const SelectedGameSection = ({ arr }) => {
  return (
    <>
      {arr.map((item) => {
        return <div className="selected-game-section-item">{item}</div>;
      })}
    </>
  );
};
