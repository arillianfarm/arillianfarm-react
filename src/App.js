import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import RecipesView from './components/RecipesView';
import VideoView from './components/VideoView';
import ProjectView from './components/ProjectView';
import BlogView from './components/BlogView';
import BooksView from './components/BooksView';
import AboutView from './components/AboutView';
import PicturesView from './components/PicturesView';
import FarmSitting from './components/FarmSitting';
import Rent1110 from './components/Rent1110';
import ApplicationPage from './components/RentalApplicationForm';
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

// --- START: RECOMMENDED REACT-SNAP ADDITION ---

/**
 * Utility to check if the code is currently running inside the react-snap pre-renderer.
 * Use this in your child components (e.g., inside useEffect or data fetching)
 * to skip client-side specific logic that might fail during the static pre-render.
 *
 * Example Usage in a child component:
 * import { isPreRendering } from '../App';
 * useEffect(() => {
 * if (!isPreRendering()) {
 * // This code only runs in the real browser, not in the headless crawler.
 * fetchData();
 * }
 * }, []);
 *
 * @returns {boolean} True if running under the ReactSnap User Agent.
 */
export const isPreRendering = () =>
    typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';

// --- END: RECOMMENDED REACT-SNAP ADDITION ---


// Define the paths where the TopNav should be hidden
const hiddenNavPaths = [
    '/apply',
    '/rent-1110-mill-ave' // Hides nav on the landing page
];


// Define the main content component that uses location
function AppContent() {
    const location = useLocation();

    // Check if the current path starts with any of the hidden paths
    // This handles both base paths and paths with query strings (e.g., /apply?formId=1)
    const hideNav = hiddenNavPaths.some(path => location.pathname.startsWith(path));

    return (
        <HelmetProvider>
            <RedirectHandler />
            {/* Conditional Rendering of TopNav */}
            {!hideNav && <TopNav />}

            <div className="content-wrapper">
                <Routes>
                    {/* Static Routes */}
                    <Route path="/" element={<VideoView />} />
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/books" element={<BooksView />} />
                    <Route path="/pictures" element={<PicturesView />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/farm-sitting" element={<FarmSitting />} />

                    {/* Rental/Application Routes (often good candidates for exclusion if they require forms/auth) */}
                    <Route path="/rent-1110-mill-ave" element={<Rent1110 />} />
                    <Route path="/apply" element={<ApplicationPage />} />

                    {/* Dynamic Routes - Ensure these are linked on a static page for react-snap to find them! */}
                    <Route path="/videos" element={<VideoView />} />
                    <Route path="/recipes" element={<RecipesView />} />
                    <Route path="/recipes/:recipeId" element={<RecipesView />} />
                    <Route path="/projects" element={<ProjectView />} />
                    <Route path="/projects/:projectId" element={<ProjectView />} />
                    <Route path="/blog" element={<BlogView />} />
                    <Route path="/blog/:blogId" element={<BlogView />} />

                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </HelmetProvider>
    );
}

// This is the main exported component, which wraps AppContent in the Router
function App() {
    return (
        <BrowserRouter basename="/" >
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
