import "./contactPage.css";

export default function ContactPage() {
  return (
    <>
      <div className="contact-page">
        <div className="overlayer">
          <div className="contact-container">
            <div className="spacer"></div>
            <h1 className="contact-title"> Contact HapaHouse </h1>
            <div className="spacer"></div>
            <div className="contact-info">
              <div className="general-questions">
                <a href="http://www.instagram.com/direct/t/103720997694402">
                  <p className="general-questions">General Questions</p>
                  <img src="/send.png" alt="" className="contact-link" />
                </a>
              </div>
              <div className="general-questions">
                <a href="http://www.instagram.com/direct/t/103720997694402">
                  <p className="general-questions">Request a Catalog</p>
                  <img src="/book.png" alt="" className="contact-link" />
                </a>
              </div>

              <div className="mail-to-sell">
                <a
                  href="mailto:hapahouse808@gmail.com"
                  className="mail-to-sell-link"
                >
                  <p className="contact-to-sell">
                    Inquire To Sell Hapa House Products
                  </p>
                  <img src="/email.png" alt="" className="contact-link-mail" />
                </a>
              </div>
            </div>
            <div className="contact-link-container">
              <a href="http://instagram.com/hapahouse">
                <img src="/instagram.png" alt="" className="contact-pics" />
              </a>
              <a href="https://facebook.com/hapahouse">
                <img src="/social.png" alt="" className="contact-pics" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
