import React from 'react';


const Favourites = () => {

    const favData = localStorage.getItem('favourite');
    // console.log(favData);
    JSON.parse(favData);
    console.log(favData);
    // console.log(favData.title);

    return (
        <main className="main-favourites">
            <section className="section-favourites">
                <div className="favourites-page">
                    <div className="fav-grid">
                        <div className="fav-movie-01">
                            <div className="fav-poster-01">
                            </div>
                            <div className="text-01">
                                <button className="fav-more-info-btn">More info</button>
                            </div>
                        </div>
                    </div>
                    {/* <p className="favourites-p">Create a list of your favourite movies by clicking the 'add to favourites' button on each individual movie page.</p> */}
                </div>
            </section>  
        </main>
    )
};

export default Favourites;