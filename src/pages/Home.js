import React from "react";
import HeroSection from "../components/HeroSection";
import SaleBanner from "../components/SaleBanner";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Benefits from "../components/Benefits";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SaleBanner />
      <CategoriesSection />
      <FeaturedProducts />
      <Benefits />
      <Newsletter />
    </>
  );
};

export default Home;