import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

const FilterComponent = () => {
  const genres = getGenres();

  return (
    <React.Fragment>
      <ul className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          All Genres
        </button>
        {genres.map((genre) => {
          return (
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              {genre.name}
            </button>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default FilterComponent;
