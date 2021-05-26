import React, { useState, useEffect } from 'react'
import Key from "../Key"

export default function Movie(props) {
    const [details, setDetails] = useState("")

    useEffect(() => {
        getDetails()
    }, [details])

    const getDetails = async () => {
            const response = await fetch(`http://www.omdbapi.com/?i=${props.id}&apikey=${Key}`)
            const json = await response.json()
            setDetails(json)
        }

    return (
        <div className="movie-card">
            <img src={props.poster} className="movie-poster"></img>
            <p className="title"><strong>{props.title}</strong></p>
            <p className="details">{details.Plot}</p>
            <p className="details"><strong>Cast:</strong> {details.Actors}</p>
            <p className="details"><strong>Runtime:</strong> {details.Runtime}</p>
            <p className="details"><strong>Rated:</strong> {details.Rated}</p>
            <p className="details"><strong>Genre:</strong> {details.Genre}</p>
            <p className="details"><strong>IMDb Rating:</strong> {details.imdbRating}</p>
            <p className="details"><strong>Release Date:</strong> {details.Released}</p>
        </div>
    )
}
