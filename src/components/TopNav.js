import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../TopNav.css'; // Create a CSS file for TopNav

function TopNav() {
    return (
        <header className="main-header">
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            ARILLIAN FARM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/videos" className={({ isActive }) => (isActive ? 'active' : '')}>
                            VIDEOS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipes" className={({ isActive }) => (isActive ? 'active' : '')}>
                            RECIPES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pictures" className={({ isActive }) => (isActive ? 'active' : '')}>
                            PICTURES
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="https://www.zazzle.com/collections/fall_2024-119118606070157890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="merch-NavLink"
                        >
                            MERCH
                        </a>
                    </li>
                    <li>
                        <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>
                            BOOKS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                            DIY PROJECTS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                            BLOG
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            ABOUT
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default TopNav;