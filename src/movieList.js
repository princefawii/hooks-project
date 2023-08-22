import React, { useState } from "react";

import MovieCard from "./movieCard";

function MovieList({ allMovies }) {
  // const [movieArr, setMovieArr] = useState(movieArr);
  let gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "50%",
    gap: "70px",
    padding: "20px auto",
    marginLeft: "auto",
    marginRight: "auto",
  };

  let gridItem = {
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };
  console.log("i am here", allMovies);
  return (
    <div style={{ textAlign: "center" }}>
      <ul style={gridContainer}>
        {allMovies.map((movie, index) => (
          <li key={index} style={gridItem}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              posterUrl={movie.posterurl}
              rating={movie.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;