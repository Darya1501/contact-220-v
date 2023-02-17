import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { LandingPage } from './pages/landing/landing-page';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
