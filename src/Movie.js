import React from "react";
import './Movie.css'
import { Link } from "react-router-dom"
const Movie = ({ title, id, poster_path, average_rating,}) => {
    return (
        <div className="movie" data-cy="movie">
            <h2>{title}</h2>
            <Link to={`/movies/${id}`}>
            <img className="movie-poster" src={poster_path} alt={poster_path}/></Link>

            <p>⭐️ {average_rating.toFixed(1)}</p>
        </div>
    )
}

export default Movie;