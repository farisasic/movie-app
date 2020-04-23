import React, { useEffect, useState } from 'react';
import {API_KEY, POPULAR_URL,} from '../globals/variables';
import {MovieResultsTest} from './MovieResults';

const Home = () => {

  // App states
    const [popularMovieData, setPopularMovieData] = useState(null);

        useEffect(() => {
            
            const fetchPopularMovieInfo = async () => {

                    const res = await fetch (`${POPULAR_URL}?api_key=${API_KEY}&language=en-US&page=1`);
                    let data = await res.json();
                    
                    setPopularMovieData(data.results);
                     
            }
            fetchPopularMovieInfo();
    
            }, []);

            console.log(popularMovieData);

            return (
                <main className="main-home">
                    <section className="section-home">
                        {popularMovieData && <MovieResultsTest results={popularMovieData} />}
                    </section>
                </main>
            );
        }

export default Home;