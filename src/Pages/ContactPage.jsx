import { Fade } from "react-awesome-reveal";
import "./contactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="overlayer">
        <Fade duration={0}>
          <div className="spacer"></div>
        </Fade>
        <div className="contact-container">
          <Fade damping={0.2} delay={500}>
            <h1 className="contact-title"> Contact HapaHouse </h1>
          </Fade>
          <div className="spacer"></div>
          <div className="contact-info">
            <div className="general-questions">
              <Fade delay={1000}>
                <a href="http://www.instagram.com/direct/t/103720997694402">
                  <p className="general-questions">General Questions</p>
                  <img src="/send.png" alt="" className="contact-link" />
                </a>
              </Fade>
            </div>
            <div className="request-catalog">
              <Fade delay={1500}>
                <a href="http://www.instagram.com/direct/t/103720997694402">
                  <p className="general-questions">Request a Catalog</p>
                  <img src="/book.png" alt="" className="contact-link" />
                </a>
              </Fade>
            </div>
            <div className="mail-to-sell">
              <Fade delay={2000}>
                <a href="mailto:hapahouse808@gmail.com">
                  <p className="contact-to-sell">
                    Inquire To Sell Hapa House Products
                  </p>
                  <img src="/email.png" alt="" className="contact-link-mail" />
                </a>
              </Fade>
            </div>
          </div>

          <div className="contact-link-container">
            <Fade delay={2000} triggerOnce={true}>
              <a href="http://instagram.com/hapahouse">
                <img src="/instagram.png" alt="" className="contact-pics" />
              </a>
              <a href="https://facebook.com/hapahouse">
                <img src="/social.png" alt="" className="contact-pics" />
              </a>
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
    </div>
  );
}
