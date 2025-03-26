import React from "react";
import heroImage from '../image/hero-section.jpg';
import '../styles/herosection.css'; 



const HeroSection = () => {
  return (
    <section className="hero-section"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${heroImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
    >
      <div className="container text-start">
        <h1 className="display-3 fw-light mb-3">
          <span>STEP INTO STYLE</span>
          WITH STRIDE!
        </h1>
        <p className="fs-5 mb-3">
          Discover the perfect pair for every occasion and step out <br /> in style, comfort, and confidence.
          Let your stride speak for itself!
        </p>
        <div id="h-btn" className="d-flex gap-3">
          <a href="#" className="btn btn-lg px-4">Shop Men</a>
          <a href="#" className="btn btn-lg px-4">Shop Women</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
