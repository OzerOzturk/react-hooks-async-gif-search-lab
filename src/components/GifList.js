import React from "react";

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.url}>
          <img width="250" src={gif.url} alt="gif-image" />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
