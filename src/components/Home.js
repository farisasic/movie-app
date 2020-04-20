import React, { useEffect, useState } from 'react';
import {API_KEY, POPULAR_URL,} from '../globals/variables';
//import {popularMovie} from '../utilities/PopularMovie';
//import makeDate from '../utilities/dateMaker';
//import IndividualMovie from '../components/IndividualMovie';

const Home = () => {


        let initialTitle = '';
        let initialMovieDescription = '';
        let initialRating = '';
        //let initialReleaseDate = '';
        let initialPoster = '';
        


        const [movieTitle, setMovieTitle] = useState(initialTitle);
        const [movieDescription, setMovieDescription] = useState(initialMovieDescription);
        const [movieRating, setMovieRating] = useState(initialRating);
        //const [releaseDate, setReleaseDate] = useState(initialReleaseDate);
        const [poster, setPoster] = useState(initialPoster);

        useEffect(() => {

            const fetchMovieInfo = async () => {
                const res = await fetch (`${POPULAR_URL}?api_key=${API_KEY}&language=en-US`);
                const movieData = await res.json();

                setMovieTitle(movieData.title);
                setMovieDescription(movieData.overview);
                setMovieRating(movieData.vote_average * 10);
                //setReleaseDate(movieData.release_date);
                setPoster(movieData.poster_path);
                 console.log(movieData);
            }
            fetchMovieInfo();
    
            }, []);

            
        return (
            <main className="main-home">
                <section className="section-home">
                    <div className="movie-grid">
                        <div className="individual-movie">
                        
                        <img src={`https://image.tmdb.org/t/p/w185${poster}`} alt={movieTitle}></img>
                        
                        <p>{movieDescription}</p>
                        <h3>Rating</h3>
                        <p>{movieRating}%</p>
                        <h3>Release date</h3>
                        <p></p>
                        </div>
                    </div>
                </section>  
            </main>
        );
    
}

export default Home;