import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCart } from "../store/actions/shoppingCartActions";

const ProductCard = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goProductDetail = () => {
    history.push(
      `/ProductPage/${product.category_id}/${product.id}/${product.name}`
    );
  };

  const addToCartHandler = () => {
    dispatch(setCart(product));
  };

  return (
    <>
      <div className="w-60 sm:w-11/12 gap-4 mb-20 flex flex-col shadow hover:scale-110 hover:shadow-2xl">
        <img
          onClick={goProductDetail}
          className="object-fill cursor-pointer"
          src={product.images[0].url}
        />
        <h5 className="sm:text-center">{product.name}</h5>

        <a className="text-[#737373] truncate sm:text-center">
          {product.description}
        </a>
        <div className="flex gap-2 justify-center">
          <h5 className="text-[#737373]">
            ${(Math.round(product.price * 100) / 100).toFixed(2)}
          </h5>
          <h5 className="text-[#23856D]">
            ${(Math.round(product.price * 100) / 100).toFixed(2)}
          </h5>
        </div>
        <div className="flex items-center gap-1 justify-center pb-3">
          <div class="w-4 h-4 hover:scale-110 bg-blue-500 rounded-full"></div>
          <div class="w-4 h-4 hover:scale-110 bg-teal-700 rounded-full"></div>
          <div class="w-4 h-4 hover:scale-110 bg-orange-400 rounded-full"></div>
          <div class="w-4 h-4 hover:scale-110 bg-black rounded-full"></div>
        </div>
        <Button
          className="mb-4 w-36 place-self-center"
          size=""
          onClick={addToCartHandler}
          color="blue"
        >
          Add To Cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
