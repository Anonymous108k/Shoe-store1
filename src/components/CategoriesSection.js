import React from 'react';
import '../styles/categories.css';
import sneakers from '../image/sneakers.jpeg';
import heels from '../image/heels.jpeg';
import sports from '../image/sports.jpeg';
import sandals from '../image/sandals.jpeg';

const CategoriesSection = () => {
  return (
    <section className="py-5">
        <div id="Categories" className="container">
            <h2 className="text-center fs-3 mb-6">Shop By Category</h2>
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="category-card">
                    <img src={sneakers} className="img-fluid" alt="Sneakers" />
                        <div className="category-overlay">
                            <span>Sneakers</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                    <img src={heels} className="img-fluid" alt="heels" />
                        <div className="category-overlay">
                            <span>Formal</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                    <img src={sports} className="img-fluid" alt="sports" />
                        <div className="category-overlay">
                            <span>Sports</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category-card">
                    <img src={sandals} className="img-fluid" alt="sndals" />
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
