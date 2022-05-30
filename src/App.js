import React from 'react';
import Nav from './component/Nav'
import Footer from './component/Footer'
import Homepage from './pages/Homepage';
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
