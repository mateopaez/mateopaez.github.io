import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav.js";
import Background from './components/Background.js';
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Classes from "./components/Classes.js";
import Resume from "./components/Resume.js";
import Contact from "./components/Contact.js";
import "./styles/app.css";


const App = () => {
  return ( 
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
