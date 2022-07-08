import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//importing components for the routes
import GalleryPage from './components/GalleryPage/GalleryPage';
import App from './App';
import ContactPage from './components/ContactPage/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="gallery" element={<GalleryPage />}/>
      <Route path="contact" element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

