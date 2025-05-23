import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import NotFoundPage from './pages/NotFoundPage';
import RedirectHandler from './RedirectHandler';
import { HelmetProvider } from 'react-helmet-async';

function App() {

    return (
        <HelmetProvider>
        <BrowserRouter basename="/" >
            <RedirectHandler />
            <TopNav />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/videos" element={<VideoView />} />
                    <Route path="/recipes" element={<RecipesView />} />
                    <Route path="/recipes/:recipeId" element={<RecipesView />} />
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
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </HelmetProvider>
    );
}

export default App;