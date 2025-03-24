import React from "react";
import '../styles/benifits.css'; // Import main styles for Hero Section

const Benefits = () => {
  return (
    <section className="py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-3 text-center">
                    <div className="p-3">
                        <i className="fas fa-truck fs-1 text-primary mb-3"></i>
                        <h5>Free Shipping</h5>
                        <p className="text-muted">On orders over ₹3,000</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="p-3">
                        <i className="fas fa-undo fs-1 text-primary mb-3"></i>
                        <h5>30 Days Return</h5>
                        <p className="text-muted">Hassle-free returns</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="p-3">
                        <i className="fas fa-lock fs-1 text-primary mb-3"></i>
                        <h5>Secure Payment</h5>
                        <p className="text-muted">100% secure checkout</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="p-3">
                        <i className="fas fa-headset fs-1 text-primary mb-3"></i>
                        <h5>24/7 Support</h5>
                        <p className="text-muted">Dedicated customer service</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Benefits;
