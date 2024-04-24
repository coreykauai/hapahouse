import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className={`mobile-menu ${isOpen ? "menu-open" : "menu-close"}`}>
        <ul className="mobile-links">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/locate">Find Us</NavLink>
          <NavLink to="/story">Story</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </section>

      <nav className="navigation">
        <NavLink to="/">
          <img
            src="/Hapa House logo WHITE SVG.svg"
            alt="Hapa house logo"
            className="logo"
          />
        </NavLink>

        <ul className="large">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/locate">Find Us</NavLink>
          <NavLink to="/story">Story</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>

        <Hamburger
          toggled={isOpen}
          toggle={() => {
            setOpen(!isOpen);
          }}
          className="taco"
        />
        {/* 
        {isOpen && (
          <div className="overlay">
            <nav className="silde-menu"></nav>
          </div>
        )} */}
      </nav>
    </>
  );
}
