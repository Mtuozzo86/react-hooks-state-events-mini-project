import React from "react";

function CategoryFilter({ categories, setCategoryName, categoryName }) {
  const categoryButtons = categories.map((category) => {
    return (
      <button
        className={categoryName === category ? "selected" : ""}
        onClick={() => setCategoryName(category)}
        key={category}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
