import "./locatePage.css";

export default function LocatePage() {
  return (
    <div className="location-page">
      <div className="overlayer">
        <div className="spacer"></div>
        <h1 className="location-title">We are currently in these stores!</h1>
        <div className="find-us">
          <div className="store-list">
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
              <div className="spacer"></div>
              <li>
                <a href="http://">
                  <p className="sell-hapa">Want to Sell Hapa House products?</p>
                </a>
              </li>
            </ul>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
