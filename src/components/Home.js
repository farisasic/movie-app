import React, { useEffect, useState } from 'react';
import {API_KEY, POPULAR_URL, TOP_RATED_URL, NOW_PLAYING_URL, UPCOMING_URL} from '../globals/variables';
import {DbMovieResults} from './MovieResults';

const Home = () => {

  // App states
    
    const [movieData, setMovieData] = useState(null)
    const [searchType, setSearchType] = useState(POPULAR_URL)

        useEffect(() => {
            
            const fetchMovieInfo = async () => {

                    const res = await fetch (`${searchType}?api_key=${API_KEY}&language=en-US&page=1`);
                    let data = await res.json();
                    
                   setMovieData(data.results);
                     
            }
            fetchMovieInfo();
    
            }, [searchType]);
            const handleChange = (e) => {
                const value = e.target.value;
             setSearchType(value);   
            }
            

            return (
                <main className="main-home">
                    <form>
                    <label htmlFor='choice'>Get Movie List: </label>
                        <select onChange={handleChange} name='choice' id='choice' value={searchType}>
                            <option value={POPULAR_URL}>Popular</option>
                            <option value={TOP_RATED_URL}>Top Rated</option>
                            <option value={NOW_PLAYING_URL}>Now Playing</option>
                            <option value={UPCOMING_URL}>Upcoming</option>
                        </select>
                    </form>
                    <section className="section-home">
                        {movieData && <DbMovieResults results={movieData}/>}
                    </section>
                </main>
            );
        }

export default Home;