import React from "react";
import MovieLibrary from "./MovieLibrary";
import './Movie.css'

const Movie = (movies) => {
console.log('MOVIE MOVIE',movies)
    return (
        <div>
            <h2>{movies.title}</h2>
        </div>
    )

}

export default Movie;