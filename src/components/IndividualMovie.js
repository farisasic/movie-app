import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../globals/variables';

const IndividualMovie = (props) => {

    // Page variables
    let movie_id = '330457';
    let initialTitle = '';
    let initialMovieDescription = '';
    let initialRating = '';
    let initialReleaseDate = '';
    let initialPoster = '';
    let initialImageURL = '';
    let initialImageSize = '';

    // App states
    const [movieTitle, setMovieTitle] = useState(initialTitle);
    const [movieDescription, setMovieDescription] = useState(initialMovieDescription);
    const [movieRating, setMovieRating] = useState(initialRating);
    const [releaseDate, setReleaseDate] = useState(initialReleaseDate);
    const [poster, setPoster] = useState(initialPoster);
    const [imageURL, setImageURL] = useState(initialImageURL);
    const [imageSize, setImageSize] = useState(initialImageSize);

    // Movie info API call
    useEffect(() => {

        const fetchMovieInfo = async () => {
            const res = await fetch (`${BASE_URL}${movie_id}?api_key=${API_KEY}&language=en-US`);
            const movieData = await res.json();
            setMovieTitle(movieData.title);
            setMovieDescription(movieData.overview);
            setMovieRating(movieData.vote_average * 10);
            setReleaseDate(movieData.release_date);
            setPoster(movieData.poster_path);
        }
        fetchMovieInfo();

        }, [movie_id]);


        // Config API call
        useEffect(() => {

            const fetchMovieImages = async () => {
                const res = await fetch (`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}&language=en-US`);
                const movieImages = await res.json();
                setImageURL(movieImages.images.secure_base_url);
                setImageSize(movieImages.images.poster_sizes[4]);
            }
            fetchMovieImages();
    
            }, []);

        // // Date maker - reformats the date
        const makeDate = () => {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const date = new Date(releaseDate);
            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }

        function setFavourite(){
            const favButton = document.getElementsByClassName('fav-container')[0];
            console.log(favButton);
        }
        setFavourite();

        return (
                <main className="main-movie">
                    <section className="section-movie">
                        <div className="im-page">
                            <div className="movie-info-container">
                                <div className="poster-container">
                                <img src={`${imageURL}${imageSize}${poster}`} alt={movieTitle}></img>
                                </div>
                                <div className="poster-lower-half">
                                    <div className="im-movie-text">
                                        <h2 className="im-title">{movieTitle}</h2>
                                        <button onclick={setFavourite} className="fav-container">
                                            <div className="heart-shape"></div>
                                            <p>Add to favourites</p>
                                        </button>
                                        <h3>Overview</h3>
                                        <p>{movieDescription}</p>
                                        <div className="movie-text-flex">
                                            <div className="release">
                                                <h3>Release date</h3>
                                                <p>{makeDate(releaseDate)}</p>
                                            </div>
                                            <div className="rating">
                                                <h3>Rating</h3>
                                                <p>{movieRating}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                </main>
        )
    }

export default IndividualMovie;