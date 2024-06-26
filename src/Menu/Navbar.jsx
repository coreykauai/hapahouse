import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";
import Foota from "./Foota";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <section className={`mobile-menu ${isOpen ? "menu-open" : "menu-close"}`}>
        <ul className="mobile-links">
          <NavLink to="/" className={"mobile-link"} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={"mobile-link"}
            onClick={toggleMenu}
          >
            Products
          </NavLink>
          <NavLink to="/locate" className={"mobile-link"} onClick={toggleMenu}>
            Find Us
          </NavLink>
          <NavLink to="/story" className={"mobile-link"} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={"mobile-link"} onClick={toggleMenu}>
            Contact
          </NavLink>
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

        <Foota />

        <ul className="large">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/locate">Find Us</NavLink>
          <NavLink to="/story">Story</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>

        <Hamburger toggled={isOpen} toggle={toggleMenu} className="taco" />
      </nav>
    </>
  );
}
