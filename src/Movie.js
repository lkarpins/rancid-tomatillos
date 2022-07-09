import React from "react";
import './Movie.css'

const Movie = (movies) => {
    return (
        <div className="movie">
            <h2>{movies.title}</h2>
            <img src={movies.poster_path}></img>
            <p>⭐️ {movies.average_rating.toFixed(1)}</p>
            <p>{movies.release_date}</p>
        </div>
    )
}

export default Movie;