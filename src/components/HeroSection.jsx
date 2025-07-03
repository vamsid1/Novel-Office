import "./HeroSection.scss";
import logo from "../asserts/images/logo.png";
import novelffice from "../asserts/images/office With Novel.jpg";
import officePopup from "../asserts/images/novel-tech.png";
import OfficeRentalSection from "./OfficeRentalSection";
import ImageCollage from "./ImageCollege";
import TrustedSection from "./TrustedSection";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <ul className="nav-links">
            <li>HOME</li>

            <li className="dropdown">
              SOLUTIONS
              <ul className="dropdown-menu">
                <li>Software</li>
                <li>Hardware</li>
                <li>Consulting</li>
              </ul>
            </li>

            <li className="dropdown">
              LOCATIONS
              <ul className="dropdown-menu">
                <li>India</li>
                <li>USA</li>
                <li>Germany</li>
              </ul>
            </li>

            <li>INVESTMENTS</li>
            <li>CONTACT US</li>
            <li>MORE</li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            OFFICES
            <br />
            WITH
            <br />
            NOVEL
          </h1>
        </div>
      </section>

      <div
        className="box-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
          marginTop: "40px",
        }}
      >
        <div className="hero-section">
          <img src={novelffice} alt="Office Background" className="hero-bg" />

          <div className="hero-content">
            <h1 className="line line-1">OFFICES</h1>
            <h2 className="line line-2">WITH</h2>
            <h1 className="line line-3">NOVEL</h1>
          </div>

          <div className="info-card top-left">
            <h3>HASSLE - FREE & FASTEST !</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="info-card top-right">
            <h3>CUSTOMIZABLE LAYOUTS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="info-card bottom-left">
            <h3>FULLY FURNISHED</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="info-card bottom-right">
            <h3>MANAGED 24X7</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="best-office-section">
        {/* Main Heading */}
        <h2 className="main-heading">
          Want to know
          <br />
          where the Best
          <br />
          Office Spaces are?
        </h2>

        {/* Floating chat bubbles */}
        <div className="chat-bubble top-left">
          Coworking spaces available in Novel Office?
        </div>

        <div className="chat-bubble top-right">
          Best office space with 24X7 service?
        </div>

        <div className="chat-bubble-wrapper top-center">
          <div className="chat-bubble">
            What is the best office space in Bangalore ?
          </div>

          <div className="hover-card">
            <div className="image-container">
              <img src={officePopup} alt="Office" />
              <div className="hover-text">
                <strong>NOVEL TECH PARK</strong>
                <br />
                HSR Layout, Bangalore
              </div>
            </div>
          </div>
        </div>

        {/* Other Bubbles */}
        <div className="chat-bubble top-left">
          Coworking spaces available in Novel Office?
        </div>
        <div className="chat-bubble top-right">
          Best office space with 24X7 service?
        </div>
        <div className="chat-bubble middle-right">
          Where is the best coworking space in Bangalore?
        </div>
      </div>

      <ImageCollage></ImageCollage>

      <OfficeRentalSection></OfficeRentalSection>
      <TrustedSection></TrustedSection>
    </>
  );
};

export default HeroSection;
