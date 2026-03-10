import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Project from "./routes/Project";



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes> 
        
  );
}

export default App;
