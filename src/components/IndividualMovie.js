import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../globals/variables';
import { useParams } from 'react-router-dom';

const IndividualMovie = (props) => {

    // Page variables
    let { id } = useParams();
    // let initialMovieData = '';
    // // let movie_id = '330457';
    // let initialImageURL = '';
    // let initialImageSize = '';

    // App states
    const [movieData, setMovieData] = useState(null);


    // Movie info API call
    useEffect(() => {

        const fetchMovieInfo = async () => {
            const res = await fetch (`${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`);
            const movieData = await res.json();
            setMovieData(movieData);
        }
        fetchMovieInfo();

        }, []);


        // Config API call
        // useEffect(() => {

        //     const fetchMovieImages = async () => {
        //         const res = await fetch (`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}&language=en-US`);
        //         const movieImages = await res.json();
        //         setImageURL(movieImages.images.secure_base_url);
        //         setImageSize(movieImages.images.poster_sizes[4]);
        //         console.log(movieImages.images.poster_sizes[4]);
        //         console.log(movieImages.images.secure_base_url);
        //     }
        //     fetchMovieImages();
    
        //     }, []);

        // // Date maker - reformats the date
        const makeDate = () => {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const date = new Date(movieData.release_date);
            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }



        const setFavourite = () => {
        // let favButton = document.getElementsByClassName("fav-container")[0];
        // let favClass = favButton.classList[0];
        // console.log(favClass);

        if(localStorage.getItem('favourite') === null){
            let md = [movieData];
            md = JSON.stringify(md);
            localStorage.setItem('favourite', md);
        }
        
        // localStorage.setItem('favourite', JSON.stringify(movieData));
        
        // if(favClass === "fav-container"){
        //     let favButon = "fav-container:active";
        //     console.log(favButton);
        // }else{
        //     console.log(favClass);
        // }
    }


        return (
                <main className="main-movie">
                    <section className="section-movie">
                        { movieData !== null && <div className="im-page">
                            <div className="movie-info-container">
                                <div className="poster-container">
                                <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title}></img>
                                </div>
                                <div className="poster-lower-half">
                                    <div className="im-movie-text">
                                        <h2 className="im-title">{movieData.title}</h2>
                                        <div className="fav-container" onClick={() => {setFavourite(true)}}>
                                        {/* <div className="fav-container" onClick={setFavourite()} > */}
                                            <div className="heart-shape"></div>
                                            <p>Add to favourites</p>
                                        </div>
                                        <h3>Overview</h3>
                                        <p>{movieData.overview}</p>
                                        <div className="movie-text-flex">
                                            <div className="release">
                                                <h3>Release date</h3>
                                                <p>{makeDate(movieData.release_date)}</p>
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