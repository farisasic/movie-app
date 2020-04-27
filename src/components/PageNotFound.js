import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
        return(
            <main className="main-404">
                <section className="section-404">
                    <div className="pagenotfound-content">
                        <h1 className="pagenotfound-h1">404 | Page Not Found</h1>
                        <p className="pagenotfound-p">Sorry, looks like this page doesn't exist.</p>
                        <p className="pagenotfound-link">Return to the <Link className="error-link" to={`/`}>home page</Link>.</p>
                    </div>
                </section>  
        </main>
        )
    }

export default PageNotFound;