import React from 'react';
import MoviePage from './MoviePage.js'
import './MovieSummary.css';

const MovieSummary = ({movies, returnToMain}) => {
    const chosenMovie = movies.map(movie => {
            return (
            <MoviePage
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            average_rating={movie.average_rating}
            release_date={movie.release_date}
            id={movie.id}
            key={movie.id}
            returnToMain={returnToMain}
            />
        )
    })
    return (
        <div className='movie-summary'>
        {chosenMovie}
        </div>
    )
}

export default MovieSummary;