import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCard />
      <div>Home</div>
      <Footer />
    </>
  );
};
export default Home;
