import React from "react";
import '../src/styles/SaleBanner.css'; 

const SaleBanner = () => {
  return (
    <section className="bg-danger text-white py-3">
        <div className="container text-center">
            <h4 className="mb-0">SPRING SALE! Use code SPRING25 for 25% OFF site-wide</h4>
        </div>
    </section>
  );
};

export default SaleBanner;
