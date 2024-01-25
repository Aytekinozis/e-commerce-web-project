import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCardSection from "../layout/ProductCardSection";
import SecondCarousel from "../components/SecondCarousel";
import HomeComp from "../components/HomeComp";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCard />
      <ProductCardSection />
      <SecondCarousel />
      <HomeComp />
      <div>Home</div>
      <Footer />
    </>
  );
};
export default Home;
