import React, { useEffect, useState } from 'react';
import { FavMovies } from './FavMovies';
import { NavLink } from 'react-router-dom';


const Favourites = () => {

    // App states
      const [favMovieData, setFavMovieData] = useState(null)
  
          useEffect(() => {
              
              const getFavMovies = () => {
  
                const favs = localStorage.getItem('favourite');
                const favouriteData = JSON.parse(favs);
                setFavMovieData(favouriteData);

                       
              }
              getFavMovies();
            }, []);

    return (
        <main className="main-home">
            <section className="section-home">
                <div className="fav-nav-flex">
                    <nav className="fav-navbar">
                        <ul className="fav-ul">
                            <li className="fav-li">
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li className="fav-li">
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li className="fav-li">
                                <NavLink to="/favourites">Favourites</NavLink>
                            </li>
                        </ul>
                    </nav>  
                </div>
                <div className="fav-content">
                    {favMovieData ? <FavMovies results={favMovieData}/> : <p className="favourites-p">There are no movies currently saved to your favourites.</p>}
                </div>
            </section>
        </main>
    );
};

export default Favourites;







// return (
//     <main className="main-movie">
//         <section className="section-movie">
//             { movieData !== null && <div className="im-page">
//                 <div className="movie-info-container">
//                     <div className="poster-container">
//                     <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title}></img>
//                     </div>
//                     <div className="poster-lower-half">
//                         <div className="im-movie-text">
//                             <h2 className="im-title">{movieData.title}</h2>

//                             {favourited


//                             ?

//                             <div id="fav-container" className="fav-active" onClick={() => {setFavourite(true)}}>
//                                 <div className="heart-shape"></div>
//                                 <p>Added to favourites</p>
//                             </div>

//                             :

//                             <div id="fav-container" className="fav-container" onClick={() => {setFavourite(false)}}>
//                                 <div className="heart-shape"></div>
//                                 <p>Add to favourites</p>
//                             </div>

//                             }


//                             <h3>Overview</h3>
//                             <p>{movieData.overview}</p>
//                             <div className="movie-text-flex">
//                                 <div className="release">
//                                     <h3>Release date</h3>
//                                     <p>{makeDate(movieData.release_date)}</p>
//                                 </div>
//                                 <div className="rating">
//                                     <h3>Rating</h3>
//                                     <p>{movieData.vote_average * 10}%</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>}
//         </section>  
//     </main>
// )
// }