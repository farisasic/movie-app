import React, { useEffect, useState } from 'react';
import {API_KEY, BASE_URL} from '../globals/variables';
import {popularMovie} from '../utilities/PopularMovie';

const Home = () => {

    let movieList = 'title';
    
    const [popularMovies, setPopularMovie] = useState(null);

    useEffect(() => {

        const fetchMovieList = async () => {
            const res = await fetch (`${BASE_URL}${popularMovie}?api_key=${API_KEY}&language=en-US`);
            const popularMovies = await res.json();
            setPopularMovie(popularMovies);
            console.log(popularMovies);
        }
        fetchMovieList();

        }, [movieList]);


        return(
            <main className="main-home">
                <section className="section-home">
                    <div className="movie-grid">
                        <div className="individual-movie">

                        </div>
                    </div>
                </section>  
            </main>
        )
    
}

export default Home;