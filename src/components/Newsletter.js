import React from "react";
import '../styles/newsletter.css'; // Fixed the path using forward slashes

const Newsletter = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3>Subscribe to Our Newsletter</h3>
            <p className="mb-4">Get the latest updates on new products and upcoming sales</p>
            <form className="d-flex justify-content-center">
              <div className="input-group mb-3 w-75">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address" 
                  required // Added required attribute
                />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
