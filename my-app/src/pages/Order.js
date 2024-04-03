import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Radio,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/actions/shoppingCartActions";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {},
  });
  const dispatch = useDispatch();
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);
  const address = useSelector((store) => store.shoppingCart.address);
  const [addressId, setAdressId] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

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

  const onSubmit = (data) => {
    //const { passconfirm, ...postdata } = data;

    console.log(data);
  };

  const data = [
    {
      label: "Address Information",
      value: "Address Information",
      desc: (
        <div>
          {address.length > 0 ? (
            <div className="flex gap-4 flex-wrap justify-around items-center">
              <button
                onClick={handleOpen}
                className="w-2/5 h-1/2 bg-light-blue-600 font-bold text-white border border-blue-gray-200 hover:shadow-md  rounded-md p-3"
              >
                Add Adress
              </button>
              <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardBody className="flex flex-col gap-4">
                      <Typography variant="h4" color="blue-gray">
                        Add Adress
                      </Typography>
                      <Typography
                        className="mb-3 font-normal"
                        variant="paragraph"
                        color="gray"
                      >
                        Enter Your New Address Information.
                      </Typography>
                      <Typography className="-mb-2" variant="h6">
                        Address Title:
                      </Typography>
                      <Input
                        {...register("title", {
                          required: "You Must Enter Your Address Title!",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 Characters!",
                          },
                        })}
                        label="Address"
                        size="lg"
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name?.message}</p>
                      )}
                      <Typography className="-mb-2" variant="h6">
                        Name & Surname:
                      </Typography>
                      <Input label="Name" size="lg" />
                      <Typography className="-mb-2" variant="h6">
                        Phone:
                      </Typography>
                      <Input label="Phone" size="lg" />
                      <Typography className="-mb-2" variant="h6">
                        dropdown gelecek
                      </Typography>
                      <Input label="Phone" size="lg" />
                      <Typography className="-mb-2" variant="h6">
                        District:
                      </Typography>
                      <Input label="District" size="lg" />
                      <Typography className="-mb-2" variant="h6">
                        Neighborhood:
                      </Typography>
                      <Input label="Neighborhood" size="lg" />
                      <Typography className="-mb-2" variant="h6">
                        Address:
                      </Typography>
                      <Input label="Address" size="lg" />
                      <div className="-ml-2.5 -mt-3">
                        <Checkbox label="Remember Me" />
                      </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button
                        disabled={!isValid || isSubmitting}
                        type="submit"
                        color="blue"
                        variant="gradient"
                        onClick={handleOpen}
                        fullWidth
                      >
                        {isSubmitting && (
                          <FontAwesomeIcon
                            className="mr-2"
                            icon={faCircleNotch}
                            spin
                          />
                        )}
                        Add New Address
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </Dialog>
              <Radio
                value={address[0]?.id}
                onChange={(e) => {
                  setAdressId(e.target.value);
                }}
                color="blue"
                name="address"
                label={
                  <div className="flex flex-col gap-3 border border-blue-gray-200 hover:shadow-md rounded p-3 ">
                    <div className="flex justify-between gap-32 border-b border-blue-gray-200">
                      <p className="font-bold">Title: {address[0]?.title}</p>{" "}
                      <p>Phone: {address[0]?.phone}</p>
                    </div>
                    <div>
                      <p>Address: {address[0]?.address}</p>
                      <p>City: {address[0]?.city}</p>
                    </div>
                  </div>
                }
              />
              <Radio
                value={1}
                onChange={(e) => {
                  setAdressId(e.target.value);
                }}
                color="blue"
                name="address"
                label={<p>1.address</p>}
              />
              <Radio
                value={2}
                onChange={(e) => {
                  setAdressId(e.target.value);
                }}
                color="blue"
                name="address"
                label={<p>2.address</p>}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      ),
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

  useEffect(() => {
    console.log(addressId);
  }, [addressId]);

  return (
    <>
      <Header />

      <div className="flex gap-8 justify-center min-h-[500px]">
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
