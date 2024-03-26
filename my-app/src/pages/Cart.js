import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Button, List, ListItem } from "@material-tailwind/react";
import CartProductLg from "../components/CartProductLg";

const Cart = () => {
  const history = useHistory();
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);

  let total = shoppingCart.reduce((total, item) => {
    return total + item.count * item.product.price;
  }, 0);

  let totalCart = shoppingCart.reduce((total, item) => {
    return total + item.count;
  }, 0);

  const deliveryFee = total > 300 ? "Free" : "$15";
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold my-4">My Cart</h3>
        <div className="flex gap-8 min-h-[500px]">
          <div className="my-4">
            {shoppingCart.length > 0 ? (
              <>
                <List className="p-0 border-b border-blue-gray-50">
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
          <div className="flex flex-col items-center gap-4 w-3/12 max-w-96 max-h-96 rounded-lg shadow p-4">
            <p className="text-lg font-bold">Order Summary</p>
            <div className="flex w-full justify-between px-4">
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex w-full justify-between px-4">
              <p>Delivery: </p>
              <p>{deliveryFee}</p>
            </div>
            <Button color="blue">Create Order</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
