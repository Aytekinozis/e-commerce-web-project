import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/actions/shoppingCartActions";

const CartProductSm = ({ product }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeProduct(product.product.id));
  };

  return (
    <>
      <div className="flex gap-4">
        <img
          className="w-20 rounded-md"
          src={product.product.images[0].url}
        ></img>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold">{product.product.name}</h5>
          <p> Count: {product.count}</p>
          <p>
            Price:{" "}
            <span className="text-[#23856D]">${product.product.price}</span>
          </p>
          <div className="flex">
            <button onClick={removeHandler} className="hover:text-red-600">
              <FontAwesomeIcon size="lg" icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductSm;
