import React, { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("elephants");
  const ApiKey = "";

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&${ApiKey}=dc6zaTOxFJmzC&rating=g&limit=3 `
    )
      .then((resp) => resp.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  );
}

export default GifListContainer;
