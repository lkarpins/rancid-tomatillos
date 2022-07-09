import React from 'react';
import Movie from './Movie.js'
import './MovieSummary.css';

const MovieSummary = ({ id, title, backdrop_path, average_rating, release_date }) => {
    console.log('yes')
    return (
        <div className='movie-summary'>
           <h3>{title}</h3>
        </div>
    )
}


export default MovieSummary; 