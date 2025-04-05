import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesView from './components/RecipesView';
import VideoView from './components/VideoView';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/recipes" element={<RecipesView />} />
              <Route path="/" element={<VideoView />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
