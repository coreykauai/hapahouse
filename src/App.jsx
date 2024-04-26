import { useRef, useState } from "react";
import Navbar from "./Menu/Navbar";
import { Route, Routes } from "react-router-dom";
import LocatePage from "./Pages/LocatePage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import "normalize.css";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../src/styles.css";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/story" element={<AboutPage />} />
          <Route path="/locate" element={<LocatePage />} />
        </Routes>
        <Navbar />
      </div>
    </>
  );
}

export default App;
