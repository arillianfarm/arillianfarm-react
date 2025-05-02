import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RecipesView from './components/RecipesView';
import VideoView from './components/VideoView';
import ProjectView from './components/ProjectView';
import BlogView from './components/BlogView';
import BooksView from './components/BooksView';
import AboutView from './components/AboutView';
import PicturesView from './components/PicturesView';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


function App() {
    const basename = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : '';

    return (
        <BrowserRouter basename={basename}>
            <TopNav />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/recipes" element={<RecipesView />}/>
                    <Route path="/recipes/:recipeId" element={<RecipesView />} />
                    <Route path="/videos" element={<VideoView />} />
                    <Route path="/projects" element={<ProjectView />} />
                    <Route path="/projects/:projectId" element={<ProjectView />} />
                    <Route path="/blog" element={<BlogView />} />
                    <Route path="/blog/:blogId" element={<BlogView />} />
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/books" element={<BooksView />} />
                    <Route path="/pictures" element={<PicturesView />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/" element={<VideoView />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;