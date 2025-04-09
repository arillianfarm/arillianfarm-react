import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesView from './components/RecipesView';
import VideoView from './components/VideoView';
import ProjectView from './components/ProjectView';
import BlogView from './components/BlogView';
import BooksView from './components/BooksView';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/recipes" element={<RecipesView />} />
              <Route path="/videos" element={<VideoView />} />
              <Route path="/projects" element={<ProjectView />} />
              <Route path="/blog" element={<BlogView />} />
              <Route path="/books" element={<BooksView />} />
              <Route path="/" element={<VideoView />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
