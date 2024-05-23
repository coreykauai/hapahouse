import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Menu/Navbar";
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
import ScrollToTop from "./ScrollToTop";

function App() {
  const [yOffset, setyOffset] = useState(0);
  return (
    <>
      <div className="main">
        <ScrollToTop yOffset={yOffset} setyOffset={setyOffset}>
          <Routes>
            <Route path="/" element={<HomePage setyOffset={setyOffset} />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/story" element={<AboutPage />} />
            <Route path="/locate" element={<LocatePage />} />
          </Routes>
        </ScrollToTop>
        <Navbar />
      </div>
    </>
  );
}

export default App;
