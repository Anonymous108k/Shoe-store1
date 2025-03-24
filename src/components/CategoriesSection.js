import React from 'react';
import '../src/styles/categories.css';

const CategoriesSection = () => {
  return (
    <section className="py-5">
        <div id="Categories" className="container">
            <h2 className="text-center fs-3 mb-6">Shop By Category</h2>
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="/image/sneakers.jpeg" className="img-fluid" alt="Sneakers" />
                        <div className="category-overlay">
                            <span>Sneakers</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="/image/Your Favorite Heel - Nude _ 10_0.jpeg" className="img-fluid" alt="Formal" />
                        <div className="category-overlay">
                            <span>Formal</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="/image/Salomon’s CROSS ADVANCED Is The Ultimate All-Terrain Sneaker.jpeg" className="img-fluid" alt="Sports" />
                        <div className="category-overlay">
                            <span>Sports</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                        <img src="/image/sandals.jpeg" className="img-fluid" alt="Sandals" />
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
