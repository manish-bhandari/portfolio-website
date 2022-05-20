import './App.css';
import {useEffect} from 'react'
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import OtherWork from './components/OtherWork/OtherWork';
import ContactMe from './components/Contact Me/ContactMe';
import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ disable:'mobile',duration: 1500, mirror: true, once: true});
  }, []);
  return (
    <Router>
      <div className="App" id="App">
        <Navbar />
        <div className="content">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Work />
          {/* <OtherWork /> */}
          <ContactMe />
        </div>
        <Socials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
