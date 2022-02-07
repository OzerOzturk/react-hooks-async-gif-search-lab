import React, { useState } from "react";

function GifSearch({ onSubmitQuery }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitQuery(query);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Search Weird Gifs in Here!</label>
          <input
            type="text"
            id="search"
            value={query}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Search Gifs!
        </button>
      </form>
    </div>
  );
}

export default GifSearch;
