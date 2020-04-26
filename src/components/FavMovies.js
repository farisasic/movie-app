import React from 'react';
import { Link } from 'react-router-dom';

const favMovies = (arr) => {

    const MAX_LENGTH = 150;

    return arr.map((result, i) => {

        let text = result.overview;

        return (
            <div key={i} className={`movie-data-0${i+1}`}>
                <h2><Link to={`/individual-movie/${result.id}`}>{result.title}</Link></h2>
                {<img src={`https://image.tmdb.org/t/p/w185${result.poster_path}`} alt={result.title}></img> }
                {text.length > MAX_LENGTH ? <p>{`${text.substring(0, MAX_LENGTH)}...`}</p> : <p>{text}</p>}

                <h3>Rating</h3>
                <p>{result.vote_average *10}%</p>
                <h3>Release date</h3>
                <p>{result.release_date}</p>
            </div>
        );
    } 
)} 
export const FavMovies = (props) => (
    <div className="movie-grid">
        {favMovies(props.results)}
    </div>
);