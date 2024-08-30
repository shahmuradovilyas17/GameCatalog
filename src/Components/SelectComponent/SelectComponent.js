import "./SelectComponent.scss";

export const SelectComponent = ({ categories, filterFunc, categoryName }) => {
  return (
    <select
      name={categories}
      onChange={(event) => {
        filterFunc(categoryName, event.target.value);
      }}
    >
      {categories.map((category, index) => {
        return (
          <option value={category} key={index}>
            {category}
          </option>
        );
      })}
    </select>
  );
};
