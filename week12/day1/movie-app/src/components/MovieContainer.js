import React, { useState, useEffect } from 'react'
import Movie from "../components/Movie"

export default function MovieContainer() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    const onSubmit = (e) => {
		e.preventDefault();
		getMovies();
	}

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=27c555f7`)
        const json = await response.json();
        setMovies(json.Search)
    }

    return (
        <div>
            <div className="search-container">
                <h1 className="page-header">Movie Finder</h1>

                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={search}
                        className="search"
                        placeholder="movie name..."
                        onChange={(e) => {
                            setSearch(e.target.value)
                            console.log(search)
                    }}></input>
                    <button
                        type="submit"
                        className="search-button"
                        onClick={(e) => {
                            e.preventDefault()
                            getMovies()
                            console.log(movies)
                    }}>Search</button>
                </form>
            </div>
            
            <div className="movies-container">
                {movies.map((movie) => (
                    <Movie
                    title={movie.Title} 
                    poster={movie.Poster}
                    year={movie.Year}
                    />
                ))}
            </div>
        </div>
    )
}
