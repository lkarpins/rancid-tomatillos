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
            <h2>{movie.title}</h2>
            <img className='backdrop-image' src={movie.backdrop_path} alt={movie.backdrop_path}/>
            <p>⭐️ {rating}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {genres}</p>
            <p>Budget: {
            new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(movie.budget)}</p>
            <p>Revenue: {new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(movie.revenue)}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Tagline: "{movie.tagline}"</p>
            <NavLink to='/'>
                 <button >Return to Main</button> 
            </NavLink>
        </div>
    )
}

export default MoviePage;