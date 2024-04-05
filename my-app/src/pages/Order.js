import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Option,
  Radio,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import cities from "../components/cities";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/actions/shoppingCartActions";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { API } from "../api/api";
import { toast } from "react-toastify";

const Order = () => {
  const {
    register,
    control,
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
    API.post("/user/address", data)
      .then((res) => {
        console.log(res);
        dispatch(getAddress());
        toast.success("New address added!");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
    //const { passconfirm, ...postdata } = data;
    console.log(cities[0]);
    console.log(data);
  };

  const removeHandler = (id) => {
    API.delete(`/user/address/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(getAddress());
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
      });
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
                className="w-2/5 h-1/2 bg-[#2196f3] font-bold text-white border border-blue-gray-200 hover:shadow-md  rounded-md p-3"
              >
                Add Adress
              </button>
              <Dialog
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto max-w-[48rem]">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardBody className="flex flex-wrap flex-col gap-4 ">
                      <Typography variant="h4" color="blue-gray">
                        Add Adress
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
                        size="sm"
                        className=""
                        error={errors.title}
                      />
                      {errors.title && (
                        <Typography
                          variant="small"
                          color="red"
                          className=" -mt-3 flex items-center  font-normal"
                        >
                          {errors.title?.message}
                        </Typography>
                      )}
                      <Typography className="-mb-2" variant="h6">
                        Name:
                      </Typography>
                      <Input
                        {...register("name", {
                          required: "You Must Enter Your Name!",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 Characters!",
                          },
                        })}
                        label="Name"
                      />
                      <Typography className="-mb-2" variant="h6">
                        Surname:
                      </Typography>
                      <Input
                        {...register("surname", {
                          required: "You Must Enter Your Surname!",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 Characters!",
                          },
                        })}
                        label="Surname"
                      />
                      <Typography className="-mb-2" variant="h6">
                        Phone:
                      </Typography>
                      <Input
                        {...register("phone", {
                          required: "You Must Enter Your Phone!",
                          pattern: {
                            value:
                              /^(\+90|0)?\s*(\(\d{3}\)[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}|\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}|\(\d{3}\)[\s-]*\d{7}|\d{3}[\s-]*\d{3}[\s-]*\d{4}|\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2})$/,
                            message: "Please Enter A Valid Phone Number!",
                          },
                        })}
                        label="Phone"
                      />
                      <Typography className="-mb-2" variant="h6">
                        City:
                      </Typography>
                      <Controller
                        name="city"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <Select
                            label="city"
                            placeholder="Adana"
                            menuProps={{ className: "h-48" }}
                            value={value}
                            onChange={onChange}
                          >
                            {cities.map((city) => (
                              <Option key={city} value={city}>
                                <div className="flex items-center gap-x-2">
                                  {city}
                                </div>
                              </Option>
                            ))}
                          </Select>
                        )}
                      ></Controller>

                      <Typography className="-mb-2" variant="h6">
                        District:
                      </Typography>
                      <Input
                        {...register("district", {
                          required: "You Must Enter Your District!",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 Characters!",
                          },
                        })}
                        label="District"
                      />
                      <Typography className="-mb-2" variant="h6">
                        Neighborhood:
                      </Typography>
                      <Input
                        {...register("neighborhood", {
                          required: "You Must Enter Your Surname!",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 Characters!",
                          },
                        })}
                        label="Neighborhood"
                      />
                      <Typography className="-mb-2" variant="h6">
                        Address:
                      </Typography>
                      <Input
                        {...register("address", {
                          required: "You Must Enter Your Surname!",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 Characters!",
                          },
                        })}
                        label="Address"
                      />
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
              {address.map((item) => (
                <Radio
                  value={item?.id}
                  onChange={(e) => {
                    setAdressId(e.target.value);
                  }}
                  color="blue"
                  name="address"
                  label={
                    <div className="flex flex-col max-w-[20rem] gap-3 border border-blue-gray-200 hover:shadow-md rounded p-3 ">
                      <div className="flex justify-between gap-32 border-b border-blue-gray-200">
                        <p className="font-bold">Title: {item?.title}</p>{" "}
                        <p>Phone: {item?.phone}</p>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p>Address: {item?.address}</p>
                          <p>City: {item?.city}</p>
                        </div>
                        <div>
                          <button
                            onClick={() => removeHandler(item.id)}
                            className="hover:text-red-600"
                          >
                            <FontAwesomeIcon size="lg" icon={faTrashCan} />
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
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
                    <div className="flex justify-between">
                      <div>
                        <p>Address: {address[0]?.address}</p>
                        <p>City: {address[0]?.city}</p>
                      </div>
                      <div>
                        <button
                          onClick={removeHandler}
                          className="hover:text-red-600"
                        >
                          <FontAwesomeIcon size="lg" icon={faTrashCan} />
                        </button>
                      </div>
                    </div>
                  </div>
                }
              />
              {/* <Radio
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
              /> */}
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
        <div className="min-h-48">
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
        <div className="w-3/5">
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

        <div className="flex flex-col items-center gap-4 w-3/12 max-w-80 max-h-80 rounded-lg shadow p-4">
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
