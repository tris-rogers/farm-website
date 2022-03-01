import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Produce from "./components/pages/Produce";
import Contact from "./components/pages/Contact";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";
import Footer from "./components/Footer";

function App() {
  const isNotMobileDevice = useMediaQuery({
    query: "(min-width: 600px)",
  });

  return (
    <Router>
      {isNotMobileDevice ? <NavbarDesktop /> : <NavbarMobile />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produce" element={<Produce />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
