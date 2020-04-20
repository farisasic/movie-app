import React, { useEffect, useState } from 'react';
import {API_KEY, POPULAR_URL,} from '../globals/variables';
//import {popularMovie} from '../utilities/PopularMovie';
//import makeDate from '../utilities/dateMaker';
//import IndividualMovie from '../components/IndividualMovie';

const Home = (props) => {

    // App states
    // const [popularMovieData, setPopularMovieData] = useState([]);
    const [popularMovieTitle, setPopularMovieTitle] = useState([]);
    const [popularMovieOverview, setPopularMovieOverview] = useState([]);
    const [popularMovieRating, setPopularMovieRating] = useState([]);
    const [popularMovieRelease, setPopularMovieRelease] = useState([]);

        useEffect(() => {

            const fetchPopularMovieInfo = async () => {

                for(let i = 0; i < 20; i++){
                    const res = await fetch (`${POPULAR_URL}?api_key=${API_KEY}&language=en-US&page=1`);
                    const popularMovieData = await res.json();
                    // setPopularMovieData(popularMovieData.results[i]);
                    setPopularMovieTitle(popularMovieData.results[i].title);
                    setPopularMovieOverview(popularMovieData.results[i].overview);
                    setPopularMovieRating(popularMovieData.results[i].vote_average * 10);
                    setPopularMovieRelease(popularMovieData.results[i].release_date);
                }
            }
            fetchPopularMovieInfo();
    
            }, []);

            // Faris - here are console logs if you want to see how it's working
            // console.log(popularMovieTitle);
            // console.log(popularMovieOverview);
            // console.log(popularMovieRating);
            // console.log(popularMovieRelease);

        return (
            <main className="main-home">
                <section className="section-home">
                    <div className="movie-grid">
                        <div className="individual-movie">
                            <h1>{popularMovieTitle}</h1>
                        
                        {/* <img src={`https://image.tmdb.org/t/p/w185${poster}`} alt={movieTitle2}></img> */}
                        
                        <p>{popularMovieOverview}</p>
                        <h3>Rating</h3>
                        <p>{popularMovieRating}%</p>
                        <h3>Release date</h3>
                        <p>{popularMovieRelease}</p>
                        </div>
                    </div>
                </section>  
            </main>
        );
    
}

export default Home;