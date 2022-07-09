import React from 'react';
import MoviePage from './MoviePage.js'
import './MovieSummary.css';

const MovieSummary = ({movieSummary, returnToMain}) => {
            return (
            <MoviePage
            title={movieSummary.title}
            backdrop_path={movieSummary.backdrop_path}
            average_rating={movieSummary.average_rating}
            release_date={movieSummary.release_date}
            id={movieSummary.id}
            key={movieSummary.id}
            returnToMain={returnToMain}
            budget={movieSummary.budget}
            overview={movieSummary.overview}
            genres={movieSummary.genres}
            revenue={movieSummary.revenue}
            runtime={movieSummary.runtime}
            tagline={movieSummary.tagline}

            />
        )
    }

export default MovieSummary;