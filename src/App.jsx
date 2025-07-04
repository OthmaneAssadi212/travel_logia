import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importer Router, Routes et Route
import colors from './constants/colors';
import AddBlogSection from "../src/components/AddBlogSection";
import AddBlogPage from '../src/components/AddBlogPage';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<AddBlogSection />} />
        <Route path="/add" element={<AddBlogPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
