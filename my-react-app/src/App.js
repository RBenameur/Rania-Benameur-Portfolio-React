import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import About from "./components/about/About";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact"

import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/porfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <About />

      <Portfolio />

      <Contact /> */}

      <Footer />

    </div>
  );
}

export default App;
