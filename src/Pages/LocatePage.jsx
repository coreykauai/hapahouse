import { Fade } from "react-awesome-reveal";
import "./locatePage.css";

export default function LocatePage() {
  return (
    <div className="location-page">
      <div className="spacer"></div>
      <Fade damping={0.3}>
        <h1 className="location-title">We are currently in these stores!</h1>
      </Fade>
      <div className="find-us">
        <div className="store-list">
          <Fade cascade damping={0.3}>
            <ul>
              <li>
                <a href="http://dejavusurf.com">
                  <img
                    src="https://jkannadesign.com/wp-content/uploads/2017/09/Dejavu.jpg"
                    alt=""
                    className="store-list-logo"
                  />
                </a>
              </li>

              <li>
                <a href="https://www.windwardmall.com/stores/i-mana-ka-oiwi/">
                  <img
                    src="/imanakaoiwi.png"
                    alt=""
                    className="store-list-logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wailuacountrystorekauai/?hl=en">
                  <img
                    src="/wailuastore.png"
                    alt=""
                    className="store-list-logo"
                  />
                </a>
              </li>
            </ul>
          </Fade>
          <Fade damping={0.3}>
            <div className="spacer"></div>
            <a href="mailto:hapahouse808@gmail.com">
              <p className="sell-hapa">Want to Sell Hapa House products?</p>
            </a>
            <div className="spacer"></div>
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="desktop-footer">
          <a href="http://www.instagram.com/kauaidigitaldesigns">
            <p className="kdd">© KauaiDigitalDesigns</p>
          </a>
        </div>
      </Fade>
    </div>
  );
}
