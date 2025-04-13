import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesView from './components/RecipesView';
import VideoView from './components/VideoView';
import ProjectView from './components/ProjectView';
import BlogView from './components/BlogView';
import BooksView from './components/BooksView';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
    return (
        <BrowserRouter>
            <TopNav />
            <div className="content-wrapper"> {/* Optional wrapper for main content */}
                <Routes>
                    <Route path="/recipes" element={<RecipesView />} />
                    <Route path="/videos" element={<VideoView />} />
                    <Route path="/projects" element={<ProjectView />} />
                    <Route path="/blog" element={<BlogView />} />
                    <Route path="/books" element={<BooksView />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/" element={<VideoView />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;