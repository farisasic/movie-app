import React from 'react';
import {API_KEY, BASE_URL} from '../globals/variables';

const homePage = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {

        const fetchMovieInfo = async () => {
            const res = await fetch (`${BASE_URL}${movie_id}?api_key=${API_KEY}&language=en-US`);
            const movieData = await res.json();
            setMovieData(movieData);
            console.log(movieData);
        }
        fetchMovieInfo();

        }, [movie_id]);

        
        return(
            <main className="main-home">
                <section className="section-home">
                    <h1 className="home-h1">This is a Home component.</h1>
                </section>  
            </main>
        )
    
}

export default Home;