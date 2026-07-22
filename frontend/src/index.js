import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/signup';
import AboutPage from './landingPage/about/AboutPage';
import ProductsPage from './landingPage/products/ProductsPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css"
import Login from "./landingPage/signup/Login";
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop />
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/products' element={<ProductsPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);