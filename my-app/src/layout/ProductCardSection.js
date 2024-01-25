import ProductCard from "../components/ProductCard";

const ProductCardSection = () => {
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div className="font-montserrat flex flex-col justify-center items-center gap-[0.62rem]">
        <h2 className="text-[#737373] text-xl">Featured Products</h2>
        <h3 className="text-[#252B42] text-2xl">BESTSELLER PRODUCTS</h3>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="max-w-9/12 flex justify-center items-center text-center py-[5rem] font-montserrat">
        <div className="w-9/12 justify-center flex gap-7 flex-wrap">
          {tempArr.map(() => (
            <ProductCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSection;
