import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container text-white">
            <div className="row">
                <div className="col-sm-12" className="text-center">
                    <h1 className="display-4">404 - Not Found</h1>
                    <p className="lead">Sorry, the page you are looking for does not exist.</p>
                    <p>
                        You can return to the <Link to="/">homepage</Link>.
                    </p>
                    <p>
                        Explore our:
                        {' '}
                        <Link to="/recipes">Recipes</Link> |{' '}
                        <Link to="/blog">Blog</Link> |{' '}
                        <Link to="/projects">Projects</Link>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default NotFoundPage;