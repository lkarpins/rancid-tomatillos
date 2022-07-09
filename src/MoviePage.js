import React from "react";
import './MoviePage.css';

const MoviePage = ({ title, id, backdrop_path, average_rating, release_date, returnToMain}) => {
    return (
        <div className="movie-page">
            <h2>{title}</h2>
            <img src={backdrop_path}/>
            <p>⭐️ {average_rating.toFixed(1)}</p>
            <p>{release_date}</p>
            <button onClick={() => returnToMain()}>Return to Main</button>
        </div>
    )
}

export default MoviePage;