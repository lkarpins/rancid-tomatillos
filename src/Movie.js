import React from "react";
import './Movie.css'

const Movie = ({ title, id, poster_path, average_rating, displayMovieSummary}) => {
    return (
        <div className="movie">
            <h2>{title}</h2>
            <a><img src={poster_path} onClick={() => displayMovieSummary(id)}/></a>
            <p>⭐️ {average_rating.toFixed(1)}</p>
        </div>
    )
}

export default Movie;