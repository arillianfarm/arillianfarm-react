import React from 'react';
import { Link } from 'react-router-dom';
import '../TopNav.css'; // Create a CSS file for TopNav

function TopNav() {
    return (
        <header className="main-header">
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            ARILLIAN FARM
                        </Link>
                    </li>
                    <li>
                        <Link to="/videos" className={({ isActive }) => (isActive ? 'active' : '')}>
                            VIDEOS
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipes" className={({ isActive }) => (isActive ? 'active' : '')}>
                            RECIPES
                        </Link>
                    </li>
                    <li>
                        <Link to="/pictures" className={({ isActive }) => (isActive ? 'active' : '')}>
                            PICTURES
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://www.zazzle.com/collections/fall_2024-119118606070157890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="merch-link"
                        >
                            MERCH
                        </a>
                    </li>
                    <li>
                        <Link to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>
                            BOOKS
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                            DIY PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                            BLOG
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            ABOUT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default TopNav;