import React, { useEffect, useState } from 'react';
import { FavMovies } from './FavMovies';


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
                {favMovieData && <FavMovies results={favMovieData}/>}
            </section>
        </main>
    );
};

export default Favourites;