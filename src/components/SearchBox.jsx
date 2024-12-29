import React, { useState } from "react";
import Movie from "./Movie";
import MovieList from "./movieList";
import '../App.css'


const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function searchMovie(query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f43ec82a5f24fe6190891894b7436c7a&query=${query}`
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
        setError("");
      } else {
        setError("An error occurred while fetching movies.");
        setMovies([]);
      }
    } catch (error) {
      setError("An error occurred while fetching movies.");
      setMovies([]);
    }
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      searchMovie(query);
    } else {
      setMovies([]);
      setError("");
    }
  }

  return (
    <>
      <form action="" className="form">
        <h1 className="title">Movie App</h1>

        <input
          type="text"
            placeholder="Search"
            onChange={handleSearch}
            value={searchQuery}

          className="search-input"
              />
             <button
          >search</button>
      {error && <p>{error}</p>}
          </form>
          

          {searchQuery ? <Movie movies={movies} /> : <MovieList />}
    </>
  );
};

export default SearchBox;