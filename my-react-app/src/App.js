import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Portfolio />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
