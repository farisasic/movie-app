import React from 'react';

class IndividualMovie extends React.Component {
    render(){
        return(
                <main className="main-movie">
                    <section className="section-movie">
                        <div className="im-page">
                            <div className="movie-info-container">
                                <div className="poster-placeholder-container">
                                    <div className="poster-placeholder"></div>
                                </div>
                                <div className="poster-lower-half">
                                    <div className="im-movie-text">
                                        <h2 className="im-title">Bad Boys for Life</h2>
                                        <div className="fav-container">
                                            <div className="heart-shape"></div>
                                            <p>Add to favourites</p>
                                        </div>
                                        <h3>Overview</h3>
                                        <p>Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.</p>
                                        <div className="movie-text-flex">
                                            <div className="release">
                                                <h3>Release date</h3>
                                                <p>Jan 17, 2020</p>
                                            </div>
                                            <div className="rating">
                                                <h3>Rating</h3>
                                                <p>73%</p>
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
}

export default IndividualMovie;