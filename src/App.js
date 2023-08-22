import logo from './logo.svg';
import './App.css';
import "./App.css";
import SearchBar from "./filter";
import Modal from "./modal";
import MovieList from "./movieList";
import movieArr from "./movieObjArr";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [allMovies, setAllMovies] = useState(movieArr);
  let movieArrCopy = movieArr.slice();
  function handleFilter(search) {
    let filteredMovie = movieArrCopy.filter((value) =>
      value.title.toLowerCase().includes(search.toLowerCase())
    );
    setAllMovies(filteredMovie);
  }

 function handleAddMovie(movieObj){
   let newMovieArr = [...movieArr, movieObj]
    setAllMovies(newMovieArr)
}


  return (
    <div>
      
      <SearchBar handleFilter={handleFilter} />
      <Modal handleAddMovie={handleAddMovie} />
      <MovieList allMovies={allMovies} />
    </div>
  );
}

export default App;