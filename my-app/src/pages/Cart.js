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
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold my-4">My Cart</h3>
        <div>
          {shoppingCart.length > 0 ? (
            <>
              <List className="p-0 border-b border-blue-gray-50">
                {shoppingCart.map((product) => (
                  <ListItem>
                    <CartProductLg product={product}></CartProductLg>
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={() => history.push("/cart")}
                className="mt-4 ml-12"
                color="blue"
              >
                Confirm Purchase
              </Button>
            </>
          ) : (
            <p>Shopping Cart Is Empty</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
