import { Fade } from "react-awesome-reveal";
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Fade cascade damping={0.2}>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="about-us">
          <img src="/BioHapaHouse1.png" alt="" className="about-img" />
        </div>
        <div className="spacer"></div>

        <div className="link-container-about">
          <a href="http://www.instagram.com/hapahouse/" target="_blank">
            <LuInstagram className="links-about" />
          </a>

          <a href="http://www.facebook.com/hapahouse/" target="_blank">
            <FaFacebookSquare className="links-about" />
          </a>
        </div>
        <div className="spacer"></div>
        <div className="desktop-footer">
          <a
            href="http://www.instagram.com/kauaidigitaldesigns"
            target="_blank"
          >
            <p className="kdd">© KauaiDigitalDesigns</p>
          </a>
        </div>
      </Fade>
    </div>
  );
}
