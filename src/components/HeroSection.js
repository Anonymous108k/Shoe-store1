import React from "react";
import '../styles/herosection.css'; // Import main styles for Hero Section


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container text-start">
        <h1 className="display-3 fw-light mb-3">
          <span>STEP INTO STYLE</span>
          WITH STRIDE!
        </h1>
        <p className="fs-5 mb-3">
          Discover the perfect pair for every occasion and step out in style, comfort, and confidence.
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
