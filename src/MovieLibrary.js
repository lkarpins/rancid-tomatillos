import React from "react";
import Movie from "./Movie";
import './MovieLibrary.css'


const MovieLibrary = ({ movies, fetchSpecificMovie}) => {
   const getMovie = movies.map(movie => {
    return (
        <Movie 
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        fetchSpecificMovie={fetchSpecificMovie}
        data-cy="movie"
        />
    )
})

return (
    <div className="movie-container">
        {getMovie}
    </div>
)

}
export default MovieLibrary