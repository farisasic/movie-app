import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../globals/variables';
import { useParams } from 'react-router-dom';
import PageNav from './PageNav';
import {covertNumericDateToReadableFormat, isMovieInStorage} from '../utilities/storageMaker';

const IndividualMovie = (props) => {

    // Page variables
    let { id } = useParams();

    // App states
    const [movieData, setMovieData] = useState(null);
    const [favourited, setFavourited] = useState(false);

    // Movie info API call
    useEffect(() => {

        const fetchMovieInfo = async () => {
            const res = await fetch (`${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`);
            const movieData = await res.json();
            console.log(movieData);
            setFavourited(isMovieInStorage(movieData));
            setMovieData(movieData);
        }
        fetchMovieInfo();

        }, [id]);

        const setFavourite = () => {

            if(localStorage.getItem('favourite') === null){
                let md = [movieData];
                md = JSON.stringify(md);
                localStorage.setItem('favourite', md);
                setFavourited(true);
    
            }else if(localStorage.getItem('favourite')){
                let md = [];
                md = JSON.parse(localStorage.getItem('favourite')) || [];
                for(let i = 0; i < md.length; i++) {
                    if (movieData.id === md[i].id) {
                        console.log(i);
                        md.splice(i, 1);
                        md = JSON.stringify(md);
                        localStorage.setItem('favourite', md);
                        setFavourited(false);
                        return;
                    }else if (movieData.id !== md[i].id){
                        continue;
                    }
                }

                md.push(movieData);
                localStorage.setItem('favourite', JSON.stringify(md));
                setFavourited(true);
            }
    }

        return (
        <main className="main-movie">
            <PageNav />
            <section className="section-movie">
                { movieData !== null && <div className="im-page">
                    <div className="movie-info-container">
                        <div className="poster-container">
                        {movieData.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} /> : <img src={require('../images/poster-backup-large')} alt='Poster-not-available'/>}
                        </div>
                        <div className="poster-lower-half">
                            <div className="im-movie-text">
                                <h2 className="im-title">{movieData.title}</h2>
                                {console.log('Favourited: ', favourited)}
                                {favourited
                                ?
                                <div id="fav-container" className="fav-active" onClick={() => {setFavourite()}}>
                                    <div className="heart-shape"></div>
                                    <p>Added to favourites</p>
                                </div>
                                :
                                <div id="fav-container" className="fav-container" onClick={() => {setFavourite()}}>
                                    <div className="heart-shape"></div>
                                    <p>Add to favourites</p>
                                </div>
                                }
                                <h3>Overview</h3>
                                <p>{movieData.overview}</p>
                                <div className="movie-text-flex">
                                    <div className="release">
                                        <h3>Release date</h3>
                                        <p>{covertNumericDateToReadableFormat(movieData.release_date)}</p>
                                    </div>
                                    <div className="rating">
                                        <h3>Rating</h3>
                                        <p>{movieData.vote_average * 10}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>  
        </main>
    )
    }

export default IndividualMovie;


