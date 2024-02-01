import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../components/ProductCard";
import Companies from "../components/Companies";

const ProductPage = () => {
  const tempArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <Header />
      <div>ProductListPage</div>
      <div className="max-w-9/12 flex justify-center items-center text-center py-[5rem] font-montserrat">
        <div className="w-9/12 justify-center items-center flex gap-7 flex-wrap">
          {tempArr.map(() => (
            <ProductCard />
          ))}
        </div>
      </div>
      <Companies />
      <Footer />
    </>
  );
};
export default ProductPage;
