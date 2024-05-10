import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { API } from "../api/api";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  CardHeader,
  Typography,
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
        setOpen(res.data[0].id);
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
              {orders.map((order) => (
                <Accordion className="my-5" open={open === order.id}>
                  <AccordionHeader onClick={() => handleOpen(order.id)}>
                    Order ID:{order.id}
                  </AccordionHeader>
                  <AccordionBody>
                    <p className="text-center text-2xl font-bold">
                      Total Price: $
                      <span className="underline">
                        {order.price.toFixed(2)}
                      </span>
                    </p>
                    {order.products.length > 0 ? (
                      <>
                        {order.products.map((product) => (
                          <div className="flex flex-col items-center my-4 gap-8">
                            <Card className="w-full max-h-48 max-w-[48rem] flex-row">
                              <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                              >
                                <img
                                  src={product.images[0].url}
                                  alt="card-image"
                                  className="h-full w-full object-cover"
                                />
                              </CardHeader>
                              <CardBody className="overflow-auto">
                                <Typography
                                  variant="h6"
                                  color="gray"
                                  className="mb-4 sm:mb-1"
                                >
                                  Count: {product.count}
                                </Typography>
                                <Typography
                                  variant="h4"
                                  color="blue-gray"
                                  className="mb-2"
                                >
                                  {product.name}
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mb-2 font-normal"
                                >
                                  {product.description}
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="font-normal"
                                >
                                  Price: $
                                  <span className="underline">
                                    {product.price.toFixed(2)}
                                  </span>
                                </Typography>
                              </CardBody>
                            </Card>
                          </div>
                        ))}
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
