import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  countDownProduct,
  removeProduct,
  setCart,
  setChecked,
} from "../store/actions/shoppingCartActions";
import { Button, Checkbox } from "@material-tailwind/react";

const CartProductLg = ({ product }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeProduct(product.product.id));
  };

  const countUp = () => {
    dispatch(setCart(product.product));
  };

  const countDown = () => {
    dispatch(countDownProduct(product.product.id));
  };

  return (
    <>
      <div className="flex gap-8 items-center">
        <Checkbox
          onChange={() =>
            dispatch(setChecked(product.product.id, !product.checked))
          }
          checked={product.checked}
          color="blue"
          defaultChecked
        />
        <img
          className="w-20 rounded-md"
          src={product.product.images[0].url}
        ></img>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold">{product.product.name}</h5>
          <p className="max-w-60">{product.product.description}</p>
        </div>
        <Button
          className="h-11 w-11 text-xl self-center rounded-full"
          variant="gradient"
          color="blue"
          onClick={countDown}
          size="sm"
          disabled={product.count === 1}
        >
          -
        </Button>
        <p className="w-20"> Count: {product.count}</p>
        <Button
          className="h-11 text-xl self-center rounded-full"
          variant="gradient"
          color="blue"
          onClick={countUp}
          size="sm"
        >
          +
        </Button>
        <p>
          Price:{" "}
          <span className="text-[#23856D]">
            ${(product.product.price * product.count).toFixed(2)}
          </span>
        </p>
        <div className="flex">
          <button onClick={removeHandler} className="hover:text-red-600">
            <FontAwesomeIcon size="lg" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProductLg;
