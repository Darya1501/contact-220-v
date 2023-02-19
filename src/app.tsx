import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from './hooks/store-hooks';
import { FILL_CART } from './store/constants/cart';
import { getCookieCart } from './utils/cart-functions';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

import { CartPage } from './pages/cart/cart-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';
import { ProductPage } from './pages/product/product-page';


function App() {
  const { products } = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect(
    () => {
      const cart = getCookieCart(products)
      dispatch({ type: FILL_CART, products: cart })
    }, [products, dispatch]
  )

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
