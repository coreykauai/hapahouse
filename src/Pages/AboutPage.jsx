import { Fade } from "react-awesome-reveal";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Fade cascade damping={0.2}>
        <div className="spacer"></div>
        <div className="about-us">
          <h1 className="about-us-title">The History Of Hapa House</h1>
          <div className="spacer"></div>
          <div className="about-description">
            <p className="about">
              Hapa House is a locally owned and operated design and fabrication
              company nestled on the beautiful island of Kaua‘i. From humble
              beginnings, we craft each of our products with care, embracing the
              essence of our island home. Our diverse collection includes
              clothing, bags, hats, keychains, stickers, and more, with new
              designs unveiled monthly. Follow us on {""}
              <a href="http://instagram.com/hapahouse/" target="_blank">
                Instagram{" "}
              </a>{" "}
              to discover our latest creations!
            </p>
          </div>
        </div>
        <div className="spacer"></div>
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
