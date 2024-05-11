import { Fade } from "react-awesome-reveal";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="overlayer">
        <Fade cascade damping={0.2}>
          <div className="spacer"></div>
          <div className="about-us">
            <h1 className="about-us-title">The History Of Hapa House</h1>
            <div className="spacer"></div>
            <div className="about-description">
              <p className="about">
                Grom feathering lip transition over the reef forehand hook
                right. Cheater5, fat big windup point break combos, tail click
                nutty send it. Mavericks rippin J.O.B. clean backside attack
                Fanning. Wrap reef rash, new school, Jordy Smith float elevator
                drop hit finner Simpo lip line. The OB blitz barreling clean
                slash wonk point break, Kelly Slater stale, fired up. nutty
                barreling carves hot glass rythm making it rain! Rail fighting
                for the peak line-up hollow rain. Blowing up Ocean Beach power
                hack un-real waterman rain turds in the lineup wind conditions
                combo heavy brah. Heavy section flow psych mind surfing.
              </p>
            </div>
          </div>
          <div className="spacer"></div>
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
