import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Spinner } from "@material-tailwind/react";
import { FETCH_STATES } from "../store/reducers/productReducer";

const ProductCardSection = () => {
  const productData = useSelector((store) => store.product);
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
          {productData.fetchState == FETCH_STATES.FETCHED ? (
            productData.productList.map((product) => (
              <ProductCard product={product} />
            ))
          ) : (
            <Spinner className="h-12 w-12" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSection;
