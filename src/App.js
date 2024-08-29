import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav.js";
import Background from './components/Background.js';
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Resume from "./components/Resume.js";
import Contact from "./components/Contact.js";
import "./styles/app.css";
import PersonalStats from './components/PersonalStats.js';


const App = () => {
  return ( 
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PersonalStats />
    </Router>
  );
};

export default App;
