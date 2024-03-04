import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
// import Form from "./Form.js";
import Navbar from "./Navbar";
import Home from "./Home";
import Sports from "./Sports";
import Movies from "./Movies";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Apps">
      {/* <Form /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sports" element={<Sports />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
