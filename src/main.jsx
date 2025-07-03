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
        <Route path="/connexion" element={<div>Connexion</div>} />
        <Route path="/inscription" element={<div>Iscription</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
