import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home_topbar from "./components/Topbar/Home_topbar";
import About_topbar from "./components/Topbar/About_topbar";
import Career from "./components/Topbar/Career";
import Contact from "./components/Topbar/Contact";
import Login from "./components/Topbar/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home_topbar />} />
          <Route path="/about" element={<About_topbar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
