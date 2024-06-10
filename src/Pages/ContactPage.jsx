import { Fade } from "react-awesome-reveal";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { VscBook } from "react-icons/vsc";
import { MdOutlineMessage } from "react-icons/md";
import "./contactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
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
              <a href="https://ig.me/m/hapahouse" target="_blank">
                <p className="general-questions">General Questions</p>
                <MdOutlineMessage size={60} className="message-pic" />
              </a>
            </Fade>
          </div>
          <div className="request-catalog">
            <Fade delay={1500}>
              <a href="https://ig.me/m/hapahouse" target="_blank">
                <p className="general-questions">Request a Catalog</p>
                <VscBook size={70} className="catalog-pic" />
              </a>
            </Fade>
          </div>
          <div className="mail-to-sell">
            <Fade delay={2000}>
              <a href="mailto:hapahouse808@gmail.com">
                <p className="contact-to-sell">
                  Inquire To Sell Hapa House Products
                </p>
                <IoIosMail size={70} className="mail-pic" />
              </a>
            </Fade>
          </div>
        </div>

        <div className="contact-link-container">
          <Fade delay={2000} triggerOnce={true}>
            <a href="http://instagram.com/hapahouse" target="_blank">
              <LuInstagram size={70} className="contact-pics" />
            </a>
            <a href="https://facebook.com/hapahouse" target="_blank">
              <FaFacebookSquare size={70} className="contact-pics" />
            </a>
          </Fade>
        </div>
      </div>
      <Fade>
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
