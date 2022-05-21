import './App.css';
import {createContext, useEffect, useState} from 'react'
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
import useLocalStorage from 'use-local-storage'


function App() {
  useEffect(() => {
    Aos.init({ disable:'mobile',duration: 1500, once: true});
  }, []);

  function getTheme(){
    let currTheme = localStorage.getItem("theme");

    if (currTheme) {
      return currTheme;
    } else 
      return 'dark'
  }
  

  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    let newTheme = theme == "light" ? "dark" : 'light';
    localStorage.setItem("theme",newTheme);
    setTheme(newTheme);
  }


  

  useEffect(()=>{
    console.log(theme);
  },[theme])

  return (
      <Router>
        <div className="app" id="App" data-theme={theme}>
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
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
