import { NavLink } from "react-router-dom";
import Swipers from "../Swiper/Swipers";
import { Fade } from "react-awesome-reveal";
import "./homePage.css";

export default function HomePage() {
  return (
    <div className="main">
      <div className="overlayer">
        <div className="first-pic">
          <img
            src="/Hapa House logo WHITE SVG.svg"
            alt=""
            className="main-pic"
          />
        </div>

        <Swipers />

        <Fade cascade damping={0.2}>
          <div className="opener">NEW Products HANDMADE on KAUAI WEEKLY!!</div>
          <div className="pic-selector">
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
                <img
                  src="/Pics/IMG_1943.JPG"
                  alt=""
                  className="pics-clickable"
                />
              </NavLink>
            </div>

            <div className="pic-er">
              <NavLink to="/products">
                <img
                  src="/Pics/IMG_4217.jpg"
                  alt=""
                  className="pics-clickable"
                />
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
                <img
                  src="/Pics/Screenshot 2024-04-25 at 6.38.42 PM.png"
                  alt=""
                  className="pics-clickable"
                />
              </NavLink>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="locate-us">
            <NavLink to={"/locate"}>
              <div className="locate-text">
                <h2 className="locate-text-lg">Find Us </h2>
                <h4 className="locate-text-sm">in a store near you</h4>
              </div>
            </NavLink>
            <div className="location-list-container">
              <h4 className="locations-list-title">Current Locations</h4>
              <ul className="location-list">
                <li>
                  <a href="https://dejavusurf.com/">Dejavu Kapaa & Lihue </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/wailuacountrystorekauai/?hl=en">
                    Wailua Country Store
                  </a>
                </li>
                <li>
                  <a href="https://www.windwardmall.com/stores/i-mana-ka-oiwi/">
                    I Mana Ka ‘Oiwi - Windward Mall, Oahu
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="contact-info">
            <div className="link-container-home">
              <a href="http://www.instagram.com/hapahouse/">
                <img src="/instagram.png" alt="" className="links" />
              </a>

              <a href="http://www.facebook.com/hapahouse/">
                <img src="/social.png" alt="" className="links" />
              </a>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="desktop-footer">
            <a href="http://www.instagram.com/kauaidigitaldesigns">
              <p className="kdd">© KauaiDigitalDesigns</p>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}
