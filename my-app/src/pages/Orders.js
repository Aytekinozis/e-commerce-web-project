import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { API } from "../api/api";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    API.get("/order")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, []);
  return (
    <>
      <Header />
      <h3 className="font-bold text-4xl text-center underline my-4">
        Previous Orders
      </h3>
      <div className=" flex flex-col items-center">
        <div className=" w-3/5">
          {orders.length > 0 ? (
            <>
              {orders.map((item) => (
                <Accordion className="my-5" open={open === item.id}>
                  <AccordionHeader onClick={() => handleOpen(item.id)}>
                    Order ID:{item.id}
                  </AccordionHeader>
                  <AccordionBody>
                    {item.products.length > 0 ? (
                      <>
                        {item.products.map((product) => (
                          <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                          </div>
                        ))}
                        <div></div>
                        <p>Total: {item.price}</p>
                      </>
                    ) : (
                      <>
                        <p>You Dont Have Any Previous Orders</p>
                      </>
                    )}
                  </AccordionBody>
                </Accordion>
              ))}
            </>
          ) : (
            <>
              <h3 className="text-center text-4xl font-bold my-32">
                You Have No Previous Orders
              </h3>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Orders;
