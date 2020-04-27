import React from 'react';
import PageNav from './PageNav';

class About extends React.Component {
    render(){
        return(
            <main className="main-about">
                <section className="section-about">
                    <PageNav />
                    <h1 className="about-h1">Welcome to Cinedex!</h1>
                </section>  
                <section>
                    <h2>About the project</h2>
                        <p>
                          Cinedex is the premier movie database listing movies that can easily be found via their popularity, raiting or release date! Found a movie you like? Add it to your favourites list to track to find out release date, the synopsis and so much more! Visit Cinedex at your leisure and it wont be a displeasure. 
                        </p>
                        <p>
                            This product uses the TMBDb API but is not endorsed or certified by TMDb.
                        </p>
                        <img>
                        </img>
                </section>
                <section>
                    <h2>Meet The Team</h2>
                        <p>
                        Cinedex was created by Kailee, Faris, and Erik. Created through react. We are a group of passionate web developers with a wide range of skills from JavaScript, to PHP, Wordpress and sass.
                        </p>
                        <img>
                        </img>
                </section>
            </main>
        )
    }
}

export default About;