import React from "react";
import './MoviePage.css';

const MoviePage = ({ title, id, budget, backdrop_path, average_rating, release_date, overview, genres, revenue, runtime, tagline , returnToMain}) => {
    return (
        <div className="movie-page">
            <h2>{title}</h2>
            <img src={backdrop_path}/>
            <p>⭐️ {average_rating.toFixed(1)}</p>
            <p>Release Date: {release_date}</p>
            <p>Overview: {overview}</p>
            <p>Genres: {genres.join(', ')}</p>
            <p>Budget: {
            new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(budget)}</p>
            <p>Revenue: {new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(revenue)}</p>
            <p>Runtime: {runtime} minutes</p>
            <p>Tagline: "{tagline}"</p>
            
            <button onClick={() => returnToMain()}>Return to Main</button>
        </div>
    )
}

export default MoviePage;