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
import { getSlug } from './utils';

// pull specific recipe, blog and project names from pageData jsons
import recipeData from './pageData/recipes.json';
import projectData from './pageData/projects.json';
import blogData from './pageData/blog.json';

function App({ initialPath }) {
    return (
        <BrowserRouter basename="/arillianfarm-react" >
            <TopNav />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/videos" element={<VideoView />} />
                    <Route path="/recipes" element={<RecipesView />} /> {/* For the base /recipes URL */}
                    <Route path="/recipes/:recipeId" element={<RecipesView />} />
                    {/* Dynamic routes for recipes */}
                    {/*{recipeData.data.map((recipe) => (*/}
                    {/*    <Route*/}
                    {/*        key={`${getSlug(recipe.name)}`}*/}
                    {/*        path={`/recipes/${getSlug(recipe.name)}`}*/}
                    {/*        element={<RecipesView recipe={recipe} />}*/}
                    {/*    />*/}
                    {/*))}*/}
                    <Route path="/projects" element={<ProjectView />} />
                    <Route path="/projects/:projectId" element={<ProjectView />} />
                    {/* Dynamic routes for projects */}
                    {/*{projectData.data.map((project) => (*/}
                    {/*    <Route*/}
                    {/*        key={`${getSlug(project.name)}`}*/}
                    {/*        path={`/projects/${getSlug(project.name)}`}*/}
                    {/*        element={<ProjectView project={project} />}*/}
                    {/*    />*/}
                    {/*))}*/}
                    {/* Dynamic routes for blogs */}
                    <Route path="/blog" element={<BlogView />} />
                    <Route path="/blog/:blogId" element={<BlogView />} />
                    {blogData.data.map((blog) => (
                        <Route
                            key={`${getSlug(blog.entry_subject)}`}
                            path={`/blog/${getSlug(blog.entry_subject)}`}
                            element={<ProjectView blog={blog} />}
                        />
                    ))}
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