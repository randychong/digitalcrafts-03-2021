import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Key from "../Key";

export default function MovieContainer() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getFirstMovies();
  }, []);

  const getFirstMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=star+wars&apikey=${Key}`
    );
    const json = await response.json();
    setMovies(json.Search);
  };

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=${Key}`
    );
    const json = await response.json();
    setMovies(json.Search);
    console.log(movies);
  };

  return (
    <div>
      <div className="search-container">
        <h1 className="page-header">Media Search</h1>

        <form>
          <input
            type="text"
            value={search}
            className="search"
            placeholder="star wars, etc."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="search-button"
            onClick={(e) => {
              e.preventDefault();
              getMovies();
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="movies-container">
        {movies.map((movie) => (
          <Movie
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            id={movie.imdbID}
          />
        ))}
      </div>
    </div>
  );
}
