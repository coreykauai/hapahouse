import React from "react";
import { NavLink } from "react-router-dom";
import Swipers from "../Swiper/Swipers";

export default function HomePage() {
  return (
    <div className="main">
      <div className="pic">
        <img src="/Hapa House logo WHITE SVG.svg" alt="" className="main-pic" />
      </div>

      <Swipers />

      <div className="pic-er">
        <div className="description">
          <h3>C</h3>
          <h3>L</h3>
          <h3>O</h3>
          <h3>T</h3>
          <h3>H</h3>
          <h3>I</h3>
          <h3>N</h3>
          <h3>G</h3>
        </div>
        <NavLink to="/products">
          <img src="/Pics/IMG_4220.jpg" alt="" className="pics-clickable" />
        </NavLink>
      </div>

      <div className="pic-er">
        <NavLink to="/products">
          <img src="/Pics/IMG_4217.jpg" alt="" className="pics-clickable" />
        </NavLink>
        <div className="description">
          <h3>S</h3>
          <h3>T</h3>
          <h3>I</h3>
          <h3>C</h3>
          <h3>K</h3>
          <h3>E</h3>
          <h3>R</h3>
          <h3>S</h3>
        </div>
      </div>

      <div className="pic-er">
        <div className="description">
          <h3>E</h3>
          <h3>X</h3>
          <h3>T</h3>
          <h3>R</h3>
          <h3>A</h3>
          <h3>S</h3>
        </div>
        <NavLink to="/products">
          <img src="/Pics/IMG_4215.jpg" alt="" className="pics-clickable" />
        </NavLink>
      </div>

      <div className="locate-us">
        <h2>Find Us </h2>
        <h4>in a store near you</h4>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
