import React from "react";
import './MoviePage.css';
import { NavLink } from 'react-router-dom';

const MoviePage = ({ movie }) => {
    let genres, rating; 
    if (movie.genres) {
         genres = movie.genres.join(', ')};

    if (movie.average_rating) {
        rating = movie.average_rating.toFixed(1)
    };
    return (
        <div className="movie-page">
            <h2 data-cy="summary-title">{movie.title}</h2>
            <img className='backdrop-image' data-cy="summary-backdrop" src={movie.backdrop_path} alt={movie.backdrop_path}/>
            <p data-cy="summary-rating" >⭐️ {rating}</p>
            <p data-cy="summary-release">Release Date: {movie.release_date}</p>
            <p data-cy="summary-overview">Overview: {movie.overview}</p>
            <p data-cy="summary-genres">Genres: {genres}</p>
            <p data-cy="summary-budget">Budget: {
            new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(movie.budget)}</p>
            <p data-cy="summary-revenue">Revenue: {new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(movie.revenue)}</p>
            <p data-cy="summary-runtime">Runtime: {movie.runtime} minutes</p>
            <p data-cy="summary-tagline">Tagline: "{movie.tagline}"</p>
            <NavLink to='/'>
                 <button data-cy="summary-return-button">Return to Main</button> 
            </NavLink>
        </div>
    )
}

export default MoviePage;