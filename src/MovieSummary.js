import React from 'react';
import Movie from './Movie.js'
import './MovieSummary.css';

const MovieSummary = ({ title, backdrop_path, average_rating, release_date }) => {
    return (
        <div className='movie-summary'>
            <h2>{title}</h2>
            <img src={backdrop_path}></img>
            <p>{average_rating}</p>
            <p>{release_date}</p>
        </div>
    )
}




export default MovieSummary; 