import React from "react";
import "./TrustedSection.scss";

import logo1 from "../asserts/images/1.png";
import logo2 from "../asserts/images/2.png";
import logo3 from "../asserts/images/3.png";
import logo4 from "../asserts/images/4.png";
import logo5 from "../asserts/images/5.png";
import logo6 from "../asserts/images/6.png";
import logo7 from "../asserts/images/7.png";
import logo8 from "../asserts/images/8.png";
import logo9 from "../asserts/images/9.png";
import logo10 from "../asserts/images/10.png";
import logo11 from "../asserts/images/11.png";
import logo12 from "../asserts/images/12.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <h2>
          Trusted by
          <br />
          <span>Leading Companies</span>
        </h2>
        <p>
          We are proud to be the trusted partner of businesses across
          industries. Join the many clients who rely on us for a productive and
          inspiring workspace.
        </p>
      </div>
      <div className="logo-grid">
        {logos.map((logo, idx) => (
          <img src={logo} alt={`Client Logo ${idx + 1}`} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
