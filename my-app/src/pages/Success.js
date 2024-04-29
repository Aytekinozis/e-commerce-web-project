import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useEffect, useState } from "react";
import { API } from "../api/api";
import { toast } from "react-toastify";

const Success = () => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    API.get("/order")
      .then((res) => {
        console.log(res.data[res.data.length - 1]);
        setOrder(res.data[res.data.length - 1]);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="flex flex-col gap-3 my-20">
        <p className="text-center text-4xl font-bold my-4">
          Your Order Has Been Recieved!
        </p>
        <p className="text-center text-2xl font-bold">
          Total Price: $
          <span className="underline">{order.price.toFixed(2)}</span>
        </p>
        <div className="flex justify-center">
          {order.products.map((product) => (
            <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={true}
                floated={true}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src={product.images[0].url}
                  alt="card-image"
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="gray" className="mb-4">
                  Count: {product.count}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {product.name}
                </Typography>
                <Typography color="gray" className="mb-2 font-normal">
                  {product.description}
                </Typography>
                <Typography color="gray" className="font-normal">
                  Price: $
                  <span className="underline">{product.price.toFixed(2)}</span>
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Success;
