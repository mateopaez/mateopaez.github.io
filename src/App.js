import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Classes from "./components/Classes.js";
import Resume from "./components/Resume.js";
import Contact from "./components/Contact.js";


const App = () => {
  return ( 
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About} />
        <Route path="/skills" element={Skills} />
        <Route path="/classes" element={Classes} />
        <Route path="/resume" element={Resume} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
