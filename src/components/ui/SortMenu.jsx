import React from "react";

const SortMenu = ({ sort = "SORTED_BY_DATE", onSelect = f => f }) => {
  const options = {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
  };

  return (
    <nav className="menu">
      <h1>Sort Colors</h1>
      {Object.keys(options).map((item, i) => (
        <a
          key={i}
          href="#"
          className={sort === options[item] ? "selected" : null}
          onClick={e => {
            e.preventDefault();
            onSelect(options[item]);
          }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default SortMenu;
