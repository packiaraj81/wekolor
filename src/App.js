import { NavigationBar } from "./components/navbar";
import "./App.css";
import trust from "./images/trust.png";
import passion from "./images/passion.png";
import innovation from "./images/innovation.png";
import colorist from "./images/colorist.jpg";
import facebook from "./images/facebook.png";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";
import phone from "./images/phone.png";
import whatsapp from "./images/whatsapp.png";

import { HiOutlinePhone } from "react-icons/hi";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="splitter"></div>
      <div>
        <div
          style={{
            backgroundColor: "#2e363f",
            padding: "15px",
            color: "e3e3e3",
          }}
        >
          <h2 className="who-we-are">WHO WE ARE</h2>
          <p className="body-content">
            We are passionate artists and engineers specialized in the post
            production Digitial Intermediate (DI) and have expertise in color
            grading and finishing.
          </p>
        </div>
        <div className="what-we-do-section">
          <h2>WHAT WE DO</h2>
          <p className="body-content">
            Ever seen a great song or a critical scene spoiled by poor color
            contrast or color correction? <br />
            <br />
            That’s exactly what we care for. We color craft each frame to make
            sure the scene is accurately conveying the mood and the shots are in
            sync. We never settle for anything lesser.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#2e363f",
            padding: "15px",
            color: "white",
          }}
        >
          <h2>SERVICES OFFERED</h2>
          <ul>
            <li>Color correction</li>
            <li>Color grading</li>
            <li>HDR grading</li>
            <li>Title and Credits</li>
            <li>Sub titles</li>
            <li>DCP mastering</li>
          </ul>
        </div>
        <div className="meet-our-colorist">
          <h2 className="meet-colorist-heading">MEET OUR COLORIST</h2>
          <img className="colorist-image" src={colorist}></img>
          <p>
            <strong>
              <span style={{ color: "white" }}>
                &nbsp;<a>Muthuraj Ramalingam</a>
              </span>
            </strong>
            &nbsp;has over 15 years of experience in the post production
            industry with specialization in color grading, conforming and
            working closely with the Directors, DOPs, editors and VFX artists.
            <br />
            He worked as colorist for more than 100 movies across Malayalam,
            Tamil and Telugu movies. He was awarded
            <strong>
              <span style={{ color: "white" }}>
                &nbsp;<q>Best Colorist – Kerala state award for year 2017</q>
              </span>
            </strong>
            .
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#facb31",
            padding: "15px",
            color: "black",
          }}
        >
          <h2>WHY WeKolor?</h2>
          <div className="why">
            <span className="icon-wrapper">
              <img className="why-icon" src={passion} />
            </span>
            <span className="why-text">
              <h3>
                <span className="circle-around-letter-p">P</span>assion
              </h3>
              {/* We are passionate about what we do and it is not just business. */}
              <span className="why-message">
                It is not just business. It is our passion and we follow it with
                a purpose to fullfil your dreams. We walk the extra mile to
                finish your project without cutting the corners.
              </span>
            </span>
          </div>
          <br />
          <div className="why">
            <span className="icon-wrapper">
              <img className="why-icon" src={innovation} />
            </span>
            <span className="why-text">
              <h3>
                <span className="circle-around-letter-i">I</span>nnovation
              </h3>
              <span className="why-message">
                We strive for achieving excellence by constantly exploring and
                innovating tailor-made techniques to provide exceptional service
                and experience to our clients.
              </span>
            </span>
          </div>
          <br />
          <div className="why">
            <span className="icon-wrapper">
              <img className="why-icon" src={trust} />
            </span>
            <span className="why-text">
              <h3>
                {" "}
                <span className="circle-around-letter-t">T</span>rust
              </h3>
              <span className="why-message">
                Trust is the key to our business. We want to build a long
                lasting relationship so that our clients and partners can always
                count on us.
              </span>
            </span>
          </div>
          <div className="pitstop-text">
            We never stop working on our <strong>PIT</strong>
          </div>
        </div>
        <div
          className="about-us-section"
          style={{
            padding: "15px",
          }}
        >
          <h2 className="about-us-heading" style={{ color: "white" }}>
            ABOUT US
          </h2>
          <p className="body-content">
            We are a young startup with a small team of artists who are
            passionate about doing what they are best at in the post production
            industry.
            <br /> <br />
            Our goal is to build a world class post production facility that
            provide cost effective and innovative solutions for Digital
            Intermidiate and VFX workflows.
          </p>
        </div>
      </div>
      <div className="footer-text">
        <h2>CONTACT US</h2>

        <div className="connect-with-us">
          <a href={"tel:" + "+91 95140 00440"}>
            <img className="phone-icon" src={phone} />
          </a>
          <a
            href="https://wa.me/919514000440?text=Welcome to WeKolor. How can we help you? Please leave a brief message. We 'll get back to you as soon as we can."
            target="_blank"
            noreferre
          >
            <img className="whatsapp-icon" src={whatsapp}></img>
          </a>
        </div>

        <div className="phone">
          <a
            style={{
              paddingLeft: "1rem",
              color: "white",
              // textDecoration: "none",
            }}
            href={"tel:" + "+91 95140 00440"}
          >
            +91 95140 00440
          </a>
        </div>
        <p>
          Corporate Address: <br />
          WeKolor Media Private Limited
          <br />
          #3 Sri Ramulu Street <br />
          Saravana Colony, Arunachalam Rd <br />
          Saligramam, Chennai, India - 600 093
        </p>
        <div className="social-media">
          <img className="facebook" src={facebook}></img>
          <img className="insta" src={insta}></img>
          <img className="twitter" src={twitter}></img>
        </div>
        <p className="copyright-message">
          ©2022 WeKolor Media Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
