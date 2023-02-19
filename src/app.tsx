import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
