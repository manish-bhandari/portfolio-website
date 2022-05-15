import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials/Socials';
import React, {useState, useEffect}  from 'react';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import OtherWork from './components/OtherWork/OtherWork';
import ContactMe from './components/Contact Me/ContactMe';

function App() {

  return (
    <div className="App" id="App">
      <Navbar />
      <div className="content">
        <Home />
        <About />
        {/* <Socials /> */}
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Work /> */}
        {/* <OtherWork /> */}
        {/* <ContactMe /> */}
        {/* <div className="left-social-bar"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
