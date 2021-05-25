import React from 'react'

export default function Movie(props) {
    return (
        <div className="movie-card">
            <img src={props.poster} className="movie-poster"></img>
            <p className="title">{props.title}</p>
            <p>Release Date: {props.year}</p>
        </div>
    )
}
