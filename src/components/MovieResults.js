import React from 'react';
import { Link } from 'react-router-dom';
import { MAX_LENGTH, TITLE_MAX_LENGTH } from '../globals/variables';
import {covertNumericDateToReadableFormat} from '../utilities/storageMaker';

const movieResults = (arr) => {
    
    const firstTwelveMovies = arr.slice(0,12);

    return firstTwelveMovies.map((result, i) => {

        let text = result.overview;
        let titleText = result.title;

        return (
            <div key={i} className={`movie-data-0${i+1}`}>
                <div className="movie-container">
                    {result.poster_path ? <img src={`https://image.tmdb.org/t/p/w342${result.poster_path}`} alt={result.title} /> : <img src={require('../images/poster-backup-small')} alt='Poster-not-available'/> }
                    {titleText.length > TITLE_MAX_LENGTH ? <h2>{`${titleText.substring(0, TITLE_MAX_LENGTH)}...`}</h2> : <h2>{titleText}</h2>}
                    {text.length > MAX_LENGTH ? <p className="fav-overview">{`${text.substring(0, MAX_LENGTH)}...`}</p> : <p>{text}</p>}
                    <div className="grid-content">
                        <div className="rating">
                            <h3>Rating</h3>
                            <p>{result.vote_average *10}%</p>
                        </div>
                        <div className="release">
                            <h3>Release date</h3>
                            <p>{covertNumericDateToReadableFormat(result.release_date)}</p>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="btn-more-info"><Link to={`/individual-movie/${result.id}`}>More info</Link></button>
                     </div>
                </div>
            </div>
        );
    } 
)};


export const DbMovieResults = (props) => (
    <div className="movie-grid">
        {movieResults(props.results)}
    </div>
);