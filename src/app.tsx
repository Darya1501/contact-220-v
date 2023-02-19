import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { CartPage } from './pages/cart/cart-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';
import { ProductPage } from './pages/product/product-page';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
          <Route path="/catalog/:id" element={ <ProductPage /> } />
          <Route path="/cart" element={ <CartPage /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
