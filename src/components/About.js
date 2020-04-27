import React from 'react';
import PageNav from './PageNav';

class About extends React.Component {
    render(){
        return(
            <main className="main-about">
                <div className="about-content">
                <section className="section-about">
                    <PageNav />
                        <h1 className="about-h1">Welcome to Cinedex!</h1>
                </section>  
                <section>
                    <h2 className="about-h2">About the project</h2>
                        <p className="about-p">
                        Cinedex is the premier movie database listing movies that can easily be found via their popularity, rating or release date. Found a movie you like? Add it to your favourites list to find its release date, the synopsis and so much more! Visit Cinedex at your leisure and it wont be a displeasure. 
                        </p>
                        <img src={require('../images/moviedb-image.svg')} alt="TMDb logo" className="about-img"/>
                        <p className="about-p">
                            This product uses the TMBDb API but is not endorsed or certified by TMDb.
                        </p>
                </section>
                <section className="about-last-section">
                    <h2 className="about-h2">Meet The Team</h2>
                        <p className="about-p">
                        Cinedex was created by Kailee, Faris, and Erik. Created through react. We are a group of passionate web developers with a wide range of skills from JavaScript, to PHP, Wordpress and sass.
                        </p>
                </section>
                </div>
            </main>
        )
    }
}

export default About;