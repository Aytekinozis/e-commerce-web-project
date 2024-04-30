import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Button, Input, List, ListItem } from "@material-tailwind/react";
import CartProductLg from "../components/CartProductLg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const Cart = () => {
  const history = useHistory();
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);
  const [discount, setDiscount] = useState("");

  const total = shoppingCart.reduce((total, item) => {
    if (item.checked) {
      return total + item.count * item.product.price;
    } else {
      return total + 0;
    }
  }, 0);

  const totalDeliveryFee = shoppingCart.reduce((total, item) => {
    if (item.checked && item.count * item.product.price < 300) {
      return total + 15;
    } else {
      return total + 0;
    }
  }, 0);

  let totalCart = shoppingCart.reduce((total, item) => {
    return total + item.count;
  }, 0);

  useEffect(() => {
    console.log(discount);
  }, [discount]);

  const deliveryFee = totalDeliveryFee === 0 ? "Free" : "$" + totalDeliveryFee;
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold my-4">My Cart</h3>
        <div className="flex gap-8 min-h-[500px]">
          <div className="my-4">
            {shoppingCart.length > 0 ? (
              <>
                <List className="p-0 gap-4 border-b border-blue-gray-50">
                  {shoppingCart.map((product) => (
                    <ListItem className="shadow" ripple={false}>
                      <CartProductLg product={product}></CartProductLg>
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <p>Shopping Cart Is Empty</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-center mt-4 gap-4 w-3/12 max-w-96 max-h-96 rounded-lg shadow p-4">
            <p className="text-lg font-bold">Order Summary</p>
            <div className="flex w-full justify-between px-4">
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex w-full pb-4 justify-between px-4 border-b border-blue-gray-200">
              <p>Delivery Fee: </p>
              <p>{deliveryFee}</p>
            </div>
            {/*  <div className="w-full px-4">
              <p className="mb-2">Discount Code:</p>
              <Input
                color="blue"
                value={discount}
                onChange={(e) => {
                  setDiscount(e.target.value);
                }}
                label="Discount"
                placeholder="discount10"
              />
            </div>
            {discount === "discount10" ? (
              <div className="flex w-full pb-4 justify-between px-4">
                <p>10% Discount Applied: </p>
                <p className="text-[#23856D]">
                  ${((total + totalDeliveryFee) * 0.1).toFixed(2)}
                </p>
              </div>
            ) : (
              <></>
            )} */}

            <div className="flex w-full pb-4 justify-between px-4">
              <p>Total: </p>
              <p>
                $
                {discount === "discount10"
                  ? ((total + totalDeliveryFee) * 0.9).toFixed(2)
                  : (total + totalDeliveryFee).toFixed(2)}
              </p>
            </div>
            <Link to="/order">
              <Button color="blue">Create Order</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
