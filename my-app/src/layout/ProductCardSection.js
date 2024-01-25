import ProductCard from "../components/ProductCard";

const ProductCardSection = () => {
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
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
