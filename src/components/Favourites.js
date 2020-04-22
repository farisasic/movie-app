import React, { useState, useEffect } from 'react';
import { FAV_URL, API_KEY } from '../globals/variables';


const Favourites = () => {

    let initialFavMovie = '';
    let initialUser = '';
    let initialSession = '';

    const [user, setUser] = useState(initialUser);
    const [session, setSession] = useState(initialSession);

    useEffect (() => {
        const user = async () => {
            const res = await fetch (`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`);
            const user = await res.json();
            // console.log(user.request_token);
            setUser(user.request_token);
        }
        user();
    }, []);

    console.log(user);

    window.location.replace(`https://www.themoviedb.org/authenticate/${user}?redirect_to=http://www.google.ca`);

//     useEffect (() => {
//     const session = async () => {
//         const res = await fetch (`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`);
//         const session = await res.json();
//         console.log(session);
//         // setUser(user.request_token);
//     }
//     session();
// }, []);

    // const [favMovie, setFavMovie] = useState(initialFavMovie);

    // useEffect (() => {
    //     const setFavourite = async () => {
    //         const res = await fetch (`${FAV_URL}${guestUser}/favorite?api_key=${API_KEY}&session_id=${session_id}`);
    //         const favMovies = await res.json();
    //         console.log(favMovies);
    //     }
    //     setFavourite();
    // }, []);



        // // Set the item to be stored
        // localStorage.setItem('data', 'something');
        // // Get the item in order to do something with it
        // localStorage.getItem('data');
        // // This is an object example
        // const book = {title: 'blah', author: 'blah'};
        // // This would be how you set an object in storage - you need to stringify it.
        // localStorage.setItem('mybook', JSON.stringify(book));
        // // Store the string in a variable.
        // const result = localStorage.getItem('mybook');
        // // Parse the string back into a JavaScript object so that you can use it later. This is now an object again.
        // JSON.parse(result);


        return (
            <main className="main-favourites">
                <section className="section-favourites">
                    <div className="favourites-page">
                        <p className="favourites-p">Create a list of your favourite movies by clicking the 'add to favourites' button on each individual movie page.</p>
                    </div>
                </section>  
            </main>
        )
};

export default Favourites;