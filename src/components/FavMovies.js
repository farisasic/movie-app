import React from 'react';
import { Link } from 'react-router-dom';
import {MAX_LENGTH, TITLE_MAX_LENGTH} from '../globals/variables';
import {covertNumericDateToReadableFormat} from '../utilities/storageMaker';

export const FavMovies = (props) => {
    const favMoviesLoop = (arr) => {

        return arr.map((result, i) => {
    
            let text = result.overview;
            let titleText = result.title;
            
            return (
                <div key={i} className={`movie-data-0${i+1}`}>
                    <div className="fav-movie-container">
                        {result.poster_path ? <img src={`https://image.tmdb.org/t/p/w342${result.poster_path}`} alt={result.title} /> : <img src={require('../images/poster-backup-small')} alt='Poster-not-available'/> }
                        {titleText.length > TITLE_MAX_LENGTH ? <h2><Link className="title-link" to={`/individual-movie/${result.id}`}>{`${titleText.substring(0, TITLE_MAX_LENGTH)}...`}</Link></h2> : <h2>{titleText}</h2>}
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
                        <div className="rem-fav">
                            <button onClick={() => {props.removeFav(result)}} className="remove-fav" >Unfavourite</button>
                        </div> 
                    </div>
                </div>
            ); 
        }
    )} 
    return (
    <div className="movie-grid">
        {favMoviesLoop(props.results)}
    </div>
    )
};