import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../globals/variables';
import { useParams } from 'react-router-dom';

const IndividualMovie = (props) => {

    // Page variables
    let { id } = useParams();

    // App states
    const [movieData, setMovieData] = useState(null);
    const [favourited, setFavourited] = useState(null);


    // Movie info API call
    useEffect(() => {

        const fetchMovieInfo = async () => {
            const res = await fetch (`${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`);
            const movieData = await res.json();
            setMovieData(movieData);
        }
        fetchMovieInfo();

        }, [id]);


        // // Date maker - reformats the date
        const makeDate = () => {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const date = new Date(movieData.release_date);
            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }



        const setFavourite = () => {

            if(localStorage.getItem('favourite') === null){
                let md = [movieData];
                md = JSON.stringify(md);
                localStorage.setItem('favourite', md);
                let favourited = true;
                setFavourited(favourited);

                let favButton = document.getElementById("fav-container");
        
                if(favButton.className === "fav-container"){
                    favButton.className = "fav-active";
                }
    
            }else if(localStorage.getItem('favourite')){
                let md = [];
                md = JSON.parse(localStorage.getItem('favourite')) || [];
                // console.log(md[i].id);
                // if(movieData.id == md.id)
                md.push(movieData);
                localStorage.setItem('favourite', JSON.stringify(md));

                let favButton = document.getElementById("fav-container");
        
                if(favButton.className === "fav-container"){
                    favButton.className = "fav-active";
                }
            }
    }


        // const removeFavourite = (favIndex) => {

        //     let updatedMd  = [...md];

        //     localStorage.removeItem('favourite');
            
        //     let favButton = document.getElementById("fav-container");
        //     console.log(favButton);

        //     if(favButton.className === "fav-active"){
        //         favButton.className = "fav-container";
        //     }

        // }


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
                                        <div id="fav-container" className="fav-container" onClick={() => {setFavourite(true)}}>
                                            <div className="heart-shape"></div>
                                            {favourited ? <p>Added to favourites</p> : <p>Add to favourites</p>}
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


    // const getStorage = () => {
    //     let item = localStorage.getItem('favourite');
    //     if(item){
    //         item = JSON.parse(item);
    //     }else{
    //         return false;
    //     }
    // }


    // const removeFromStorage = (movieData) => {
    //     let favItems = getStorage();
    //     const isFav = (current) => current.movieData === movieData;
    //     let indexOfItemToRemove = favItems.findIndex(isFav);
    //     favItems.splice(indexOfItemToRemove, 1);
    //     let itemsForStorage = JSON.stringify(favItems);
    //     localStorage.setItem('favourite', movieData);
    //     return favItems;
    // }
    // removeFromStorage();