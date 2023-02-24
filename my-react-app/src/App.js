// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact"

import HomePage from "./pages/home/Home";
import PortfolioPage from "./pages/portfolio/Portfolio";
import ContactPage from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">

      <Header />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes> 
      <Footer />

    </div>
  );
}

export default App;
