import React from 'react';
import { Link } from 'react-router-dom';

const movieResults = (arr) => {
    
    const firstTwelveMovies = arr.slice(0,12);

    return firstTwelveMovies.map((result, i) => {
        return (
            <div key={i} className={`movie-data-0${i+1}`}>
                <h2><Link to={`/individual-movie/${result.id}`}>{result.title}</Link></h2>
                {<img src={`https://image.tmdb.org/t/p/w185${result.poster_path}`} alt={result.title}></img> }
                <p>{result.overview}</p>
                <h3>Rating</h3>
                <p>{result.vote_average *10}%</p>
                <h3>Release date</h3>
                <p>{result.release_date}</p>
            </div>
        );
    } 
)} 
export const MovieResultsTest = (props) => (
    <div className="movie-grid">
        {movieResults(props.results)}
    </div>
);