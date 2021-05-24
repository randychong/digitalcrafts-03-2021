import React, { useState, useEffect } from 'react'
import Movie from "../components/Movie"

export default function MovieContainer() {
    const [movie, setMovie] = useState("")

    useEffect(() => {
        getMovie()
    }, [])

    const getMovie = async () => {
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=27c555f7")
        const json = await response.json();
        setMovie(json)
    }

    return (
        <div>
            <h1>Container</h1>
            <Movie movie={movie} setMovie={setMovie}/>
        </div>
    )
}
