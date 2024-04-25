import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { API } from "../api/api";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/order")
      .then((res) => {
        console.log(res);
        setOrders(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, []);
  return (
    <>
      <Header />
      <div></div>
      <Footer />
    </>
  );
};

export default Orders;
