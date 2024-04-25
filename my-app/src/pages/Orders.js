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

      {orders.length > 0 ? (
        <>
          {orders.map((item) => {
            "urun";
          })}
        </>
      ) : (
        <>
          <h3 className="text-center text-4xl font-bold my-32">
            You Have No Previous Orders
          </h3>
        </>
      )}
      <Footer />
    </>
  );
};

export default Orders;
