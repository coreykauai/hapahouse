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
              Hapa House A Locally owned and operated designer and fabrication
              company located on the tiny island of Kaua‘i. Started from scratch
              just like all of our products. Creating new Clothing, Bags, Hats,
              Keychains, Stickers and more every month! Check out our {""}
              <a href="http://instagram.com/hapahouse/" target="_blank">
                Instagram{" "}
              </a>{" "}
              to see or new designs now!
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
