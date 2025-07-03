import React from "react";
import "./ImageCollege.scss";

// Import your images
import img1 from "../asserts/images/office1.png";
import img2 from "../asserts/images/office2.png";
import img3 from "../asserts/images/office3.png";
import img4 from "../asserts/images/office4.png";
import img5 from "../asserts/images/office5.png";
import img6 from "../asserts/images/office6.png";


const data = [
  { image: img1, title: "NOVEL OFFICE QUEENS", location: "Queens Road, Bangalore" },
  { image: img2, title: "NOVEL OFFICE WORKHUB", location: "Whitefield, Bangalore" },
  { image: img3, title: "NOVEL BUSINESS PARK", location: "Koramangala, Bangalore" },
  { image: img4, title: "NOVEL MSR TECH PARK", location: "Marathahalli, Bangalore" },
  { image: img5, title: "NOVEL OFFICE CENTRAL", location: "MG Road, Bangalore" },
  { image: img6, title: "NOVEL BRIGADE TECH PARK", location: "Whitefield, Bangalore" },

];

const ImageCollage = () => {
  return (
   <div className="stacked-gallery">
      {data.map((item, index) => (
        <div className={`stacked-card position-${index}`} key={index}>
          <img src={item.image} alt={item.title} />
          <div className="overlay-text">
            <strong>{item.title}</strong><br />
            {item.location}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;
