import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/actions/shoppingCartActions";
import { useEffect } from "react";

const Order = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);

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

  const deliveryFee = totalDeliveryFee === 0 ? "Free" : "$" + totalDeliveryFee;

  const data = [
    {
      label: "Address Information",
      value: "Address Information",
      desc: <div></div>,
    },
    {
      label: "Payment Options",
      value: "Payment Options",
      desc: (
        <div>
          <p>burasi 1. yazi</p>
          <p>burasi 2. yazi</p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  return (
    <>
      <Header />

      <div className="flex gap-4 justify-center">
        <div className="w-1/2">
          <Tabs value="Address Information">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>

        <div className="flex flex-col items-center gap-4 w-3/12 max-w-96 max-h-80 rounded-lg shadow p-4">
          <p className="text-lg font-bold">Order Summary</p>
          <div className="flex w-full justify-between px-4">
            <p>Subtotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex w-full pb-4 justify-between px-4 border-b border-blue-gray-200">
            <p>Delivery Fee: </p>
            <p>{deliveryFee}</p>
          </div>
          <div className="flex w-full pb-4 justify-between px-4">
            <p>Total: </p>
            <p>${(total + totalDeliveryFee).toFixed(2)}</p>
          </div>
          <Button color="blue">Create Order</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
