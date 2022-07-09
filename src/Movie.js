import React from "react";
import './Movie.css'

const Movie = ({ title, id, poster_path, average_rating, fetchSpecificMovie}) => {
    return (
        <div className="movie">
            <h2>{title}</h2>
            <img src={poster_path} alt={poster_path} onClick={() => fetchSpecificMovie(id)}/>
            <p>⭐️ {average_rating.toFixed(1)}</p>
        </div>
    )
}

export default Movie;