import React from 'react'

export default function Movie(props) {
    console.log(props)
    return (
        <div>
            <h1>Movie</h1>
            <img src={props.movie.Poster}></img>
            <p>{props.movie.Title}</p>
        </div>
    )
}
