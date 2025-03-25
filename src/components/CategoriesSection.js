import React from 'react';
import '../styles/categories.css';

const CategoriesSection = () => {
  return (
    <section className="py-5">
        <div id="Categories" className="container">
            <h2 className="text-center fs-3 mb-6">Shop By Category</h2>
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="../public/image/sneakers.jpeg" className="img-fluid" alt="Sneakers" />
                        <div className="category-overlay">
                            <span>Sneakers</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="../public/image/heels.jpeg" className="img-fluid" alt="Formal" />
                        <div className="category-overlay">
                            <span>Formal</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="../public/image/sports.jpeg" className="img-fluid" alt="Sports" />
                        <div className="category-overlay">
                            <span>Sports</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="../public/image/sandals.jpeg" className="img-fluid" alt="Sandals" />
                        <div className="category-overlay">
                            <span>Sandals</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CategoriesSection;
