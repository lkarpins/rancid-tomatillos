import React from "react";
import './MoviePage.css';
import { NavLink } from 'react-router-dom';

const MoviePage = ({ movie , video }) => {
    let genres, rating; 
    if (movie.genres) {
         genres = movie.genres.join(', ')};

    if (movie.average_rating) {
        rating = movie.average_rating.toFixed(1)
    };

    if(movie.tagline === '') {
        movie.tagline = 'N/A'
    }
   
    return (
        <>
        <img className='backdrop-image' data-cy="summary-backdrop" src={movie.backdrop_path} alt={movie.backdrop_path}/>
        <div className="wrapper">
        <div className="movie-page">
            <h3 className="head" data-cy="summary-title" >{movie.title}</h3>
            <hr className="line"></hr>
            <p className="rating" data-cy="summary-rating" ><b className="bold">Average Rating: </b> ⭐️ <b>{rating}</b></p>
            <hr className="line"></hr>
            <p className="release" data-cy="summary-release"><b className="bold">Release Date: </b>{movie.release_date}</p>
            <hr className="line"></hr>
            <p className="genres" data-cy="summary-genres"><b className="bold">Genres: </b> {genres}</p>
            <hr className="line"></hr>
            <p className="budget "data-cy="summary-budget">
            <b className="bold">Budget: </b> 
            {
            new Intl.NumberFormat('en-US',
            { style: 'currency', 
            currency: 'USD' }
            ).format(movie.budget)}
            </p>
            <hr className="line"></hr>
            <p className="revenue" data-cy="summary-revenue"><b className="bold">Revenue: </b> {new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(movie.revenue)}</p>
              <hr className="line"></hr>
            <p className="runtime" data-cy="summary-runtime"><b className="bold">Runtime: </b> {movie.runtime} minutes</p>
            <hr className="line"></hr>
            <p className="tagline" data-cy="summary-tagline"><b className="bold">Tagline: </b> "{movie.tagline}"</p>
            <hr className="line"></hr>
            <p className="overview" data-cy="summary-overview"><b className="bold">Overview: </b>{movie.overview}</p>
            <hr className="line"></hr>
            <NavLink to='/'>
                 <button className="return" data-cy="summary-return-button">Home</button> 
            </NavLink>
        </div>
            <iframe
             data-cy="movie-trailer"
             width="700"
             height="500" 
             src={`https://www.youtube.com/embed/${video.map(key => key.key)[0]}`}    
             title="YouTube video player" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen>
            </iframe>
            </div>
        </>
    )
}

export default MoviePage;