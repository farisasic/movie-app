import React, { useEffect, useState } from 'react';
import { FavMovies } from './FavMovies';
import PageNav from './PageNav';

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

        const removeFav = (movie) => {
            console.log('removing favourite');
            const findMovieIndex = (oneMovie) => oneMovie.id === movie.id;
            let movieIndex = favMovieData.findIndex(findMovieIndex);
            let favMovieDataCopy = [...favMovieData];
            favMovieDataCopy.splice(movieIndex, 1);
            setFavMovieData(favMovieDataCopy);
            favMovieDataCopy = JSON.stringify(favMovieDataCopy);
            localStorage.setItem('favourite', favMovieDataCopy);
        }

            return (
                <main className="main-home">
                    <section className="section-home">
                        <PageNav />
                        <div className="fav-content">
                            {favMovieData && <FavMovies removeFav={removeFav} results={favMovieData}/>}
                            {(favMovieData === null || favMovieData.length === 0) &&
                            <p className="favourites-p">
                            There are no movies currently saved to your favourites. Please return to the home page to add a
                            favourite movie.
                            </p>
                            }
                        </div>
                    </section>
                </main>
            );
        };

export default Favourites;