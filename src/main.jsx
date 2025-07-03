import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destinations" element={<div>Destinations</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
