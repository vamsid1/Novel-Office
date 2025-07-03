import React, { useState } from "react";
import "./OfficeRentalSection.scss";
import office1 from "../asserts/images/office1.png";
import office2 from "../asserts/images/office2.png";
import office3 from "../asserts/images/office3.png";
import office4 from "../asserts/images/office4.png";
import office5 from "../asserts/images/office5.png";

const OfficeRentalSection = () => {
   const [selectedIndex, setSelectedIndex] = useState(null);

  const officeData = [
    {
      image: office1,
      title: "NOVEL OFFICE QUEENS",
      location: "Queens Road, Bangalore",
    },
    {
      image: office2,
      title: "NOVEL OFFICE CENTRAL",
      location: "MG Road, Bangalore",
    },
    {
      image: office3,
      title: "NOVEL MSR TECH PARK",
      location: "Marathahalli, Bangalore",
    },
    {
      image: office4,
      title: "NOVEL BRIGADE TECH PARK",
      location: "Whitefield, Bangalore",
    },
    {
      image: office5,
      title: "NOVEL OFFICE WORKHUB",
      location: "Whitefield, Bangalore",
    },
  ];

  return (
    <div className="office-rental-section">
      <h2 className="section-title">Best Rental office Space in Bangalore</h2>
      <p className="section-description">
        We provide value-for-money services with top-notch amenities, 24/7 IT support and security service,
        with options from fully furnished to co-working and managed offices in Bangalore.
      </p>

      <div className="button-group">
        <button className="primary-btn">Explore Locations</button>
        <button className="secondary-btn">Explore Gallery</button>
      </div>

      <div className="office-grid">
        {officeData.map((office, index) => (
          <div
            key={index}
            className={`office-card ${selectedIndex === index ? "active" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={office.image} alt={office.title} />
            <div className="office-text">
              <strong>{office.title}</strong>
              <br />
              {office.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfficeRentalSection