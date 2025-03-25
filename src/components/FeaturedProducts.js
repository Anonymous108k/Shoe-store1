import React from "react";
import '../styles/featuredproducts.css';
import urbanrunners from '../image/urbanrunners.jpeg';
import oxfords from '../image/oxfords.jpeg';
import summerslides from '../image/summerslides.jpeg';
import performance from '../image/performance.jpeg';

const FeaturedProducts = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Products</h2>
        <div className="row g-4">
          {/* Product Card 1 */}
          <div className="col-md-3">
            <div className="card featured-product-card h-100 border-0 shadow-sm">
              <div className="position-relative">
              <img src={urbanrunners} className="card-img-top" alt="Product-1" />
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                  New
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Urban Runners</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Casual Sneakers</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h5 className="mb-0 fw-bold">₹6,999</h5>
                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fas fa-shopping-cart me-1"></i> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="col-md-3">
            <div className="card featured-product-card h-100 border-0 shadow-sm">
              <div className="position-relative">
              <img src={oxfords} className="card-img-top" alt="Product-2" />
                <span className="badge bg-success position-absolute top-0 end-0 m-2">
                  -15%
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Classic Oxfords</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Formal Shoes</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h5 className="mb-0 fw-bold">₹9,499</h5>
                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fas fa-shopping-cart me-1"></i> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="col-md-3">
            <div className="card featured-product-card h-100 border-0 shadow-sm">
              <img src={summerslides} className="card-img-top" alt="Product-3" />
              <div className="card-body">
                <h5 className="card-title">Summer Slides</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Casual Sandals</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h5 className="mb-0 fw-bold">₹3,999</h5>
                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fas fa-shopping-cart me-1"></i> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="col-md-3">
            <div className="card featured-product-card h-100 border-0 shadow-sm">
            <img src={performance} className="card-img-top" alt="Product-4" />

              <div className="card-body">
                <h5 className="card-title">Performance Runners</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Athletic Shoes</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h5 className="mb-0 fw-bold">₹9,999</h5>
                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fas fa-shopping-cart me-1"></i> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="#" className="btn btn-outline-dark px-4">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
