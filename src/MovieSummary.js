import React from 'react';
import MoviePage from './MoviePage.js'
import './MovieSummary.css';

const MovieSummary = ({movieSummary, returnToMain}) => {
            return (
            <MoviePage 
            {...movieSummary}
            key={movieSummary.id}
            returnToMain={returnToMain}
            />
        )
    }

export default MovieSummary;