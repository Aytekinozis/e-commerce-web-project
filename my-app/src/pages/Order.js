import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
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
import {
  cartReset,
  getAddress,
  getPayment,
} from "../store/actions/shoppingCartActions";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { API } from "../api/api";
import { toast } from "react-toastify";
import CardForm from "../components/CardForm";
import CardEditForm from "../components/CardEditForm";
import { useHistory } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Order = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    watch,

    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      id: "",
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);
  const address = useSelector((store) => store.shoppingCart.address);
  const payment = useSelector((store) => store.shoppingCart.payment);
  const [addressId, setAdressId] = useState(false);
  const [cardId, setCardId] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    reset();
    setOpen(!open);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = (address) => {
    reset({
      id: address.id,
      title: address.title,
      name: address.name,
      surname: address.surname,
      phone: address.phone,
      city: address.city,
      district: address.district,
      neighborhood: address.neighborhood,
      address: address.address,
    });
    setOpenEdit(!openEdit);
  };

  const [openCard, setOpenCard] = useState(false);
  const handleOpenCard = () => {
    setOpenCard(!openCard);
  };

  const [openEditCard, setOpenEditCard] = useState(false);
  const [editingCard, setEditingCard] = useState();
  const handleOpenEditCard = (card) => {
    setOpenEditCard(!openEditCard);
    setEditingCard(card);
  };

  const checkedProducts = [];

  const total = shoppingCart.reduce((total, item) => {
    if (item.checked) {
      checkedProducts.push(item);
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
    const { id, ...postData } = data;
    console.log(postData);
    API.post("/user/address", postData)
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

  const onEditSubmit = (data) => {
    console.log(data);
    API.put("/user/address", data)
      .then((res) => {
        console.log(res);
        dispatch(getAddress());
        toast.success("Address Information changed!");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
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
    handleAddressDelOpen();
  };
  const removeCardHandler = (id) => {
    API.delete(`/user/card/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(getPayment());
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
      });
    handleCardDelOpen();
  };
  const [selectedCard, setSelectedCard] = useState();
  const order = {
    address_id: addressId,
    order_date: new Date().toJSON(),
    card_no: selectedCard?.card_no,
    card_name: selectedCard?.name_on_card,
    card_expire_month: selectedCard?.expire_month,
    card_expire_year: selectedCard?.expire_year,
    card_ccv: 321,
    price: total + totalDeliveryFee,
    products: checkedProducts.map((product) => {
      const productObj = {
        product_id: Number(product.product.id),
        count: Number(product.count),
        detail: product.product.description,
      };
      return productObj;
    }),
  };
  //------delete pop up section----------------

  const [openCardDel, setOpenCardDel] = useState(false);
  const handleCardDelOpen = () => setOpenCardDel(!openCardDel);

  const [openAddressDel, setOpenAddressDel] = useState(false);
  const handleAddressDelOpen = () => setOpenAddressDel(!openAddressDel);
  //------delete pop up section----------------

  const [orderCreating, setOrderCreating] = useState(false);
  let orderValid =
    addressId != false && cardId != false && checkedProducts.length > 0;

  const createOrderHandler = () => {
    console.log(order);

    if (orderValid) {
      setOrderCreating(true);
      console.log("Valid order:" + order);
      API.post("/order", order)
        .then((res) => {
          console.log(res);
          toast.success("Your order has been received!");
          setOrderCreating(false);
          dispatch(cartReset());
          history.push("/success");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
          setOrderCreating(false);
        });
    }
  };

  useEffect(() => {
    dispatch(getAddress());
    dispatch(getPayment());
  }, []);

  useEffect(() => {
    console.log(addressId);
  }, [addressId]);

  useEffect(() => {
    console.log(cardId);
    console.log(payment);
    setSelectedCard(payment.find((item) => item.id == cardId));
    console.log(payment.find((item) => item.id == cardId));
  }, [cardId]);

  const data = [
    {
      label: "Address Information",
      value: "Address Information",
      desc: (
        <div>
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
                    size="md"
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
                    onClick={() => setOpen(!open)}
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
          {address.length > 0 ? (
            <div className="flex sm:border-b-4 sm:pb-20 mx-4 gap-4 flex-wrap justify-between sm:justify-center items-center">
              <button
                onClick={handleOpen}
                className="w-2/5 sm:w-3/5 h-1/2 ml-10 bg-[#2196f3] font-bold text-white border border-blue-gray-200 hover:shadow-md  rounded-md p-3"
              >
                Add Adress
              </button>

              {address.map((item) => (
                <Radio
                  value={item?.id}
                  onChange={(e) => {
                    setAdressId(Number.parseInt(e.target.value));
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
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={handleAddressDelOpen}
                            className="hover:text-red-600"
                          >
                            <FontAwesomeIcon size="lg" icon={faTrashCan} />
                          </button>
                          <Dialog
                            open={openAddressDel}
                            className="w-sm"
                            size="xs"
                            handler={handleAddressDelOpen}
                          >
                            <DialogHeader className="grid place-items-center">
                              <Typography
                                className="text-center"
                                variant="h5"
                                color="blue-gray"
                              >
                                You Are Deleting An Address!
                              </Typography>
                            </DialogHeader>
                            <DialogBody className="grid place-items-center gap-4">
                              <Typography className="text-center font-normal">
                                Are You Sure You Want To Remove The Address!
                              </Typography>
                            </DialogBody>
                            <DialogFooter className="space-x-2">
                              <Button
                                variant="text"
                                color="blue-gray"
                                onClick={handleAddressDelOpen}
                              >
                                Close
                              </Button>
                              <Button
                                variant="gradient"
                                onClick={() => removeHandler(item.id)}
                              >
                                Yes, Delete Address!
                              </Button>
                            </DialogFooter>
                          </Dialog>
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="hover:text-red-600"
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
              <Dialog
                open={openEdit}
                handler={handleOpenEdit}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto max-w-[48rem]">
                  <form onSubmit={handleSubmit(onEditSubmit)}>
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
                        label="Title"
                        //defaultValue={address[0].title}
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
                        error={errors.name}
                      />
                      {errors.title && (
                        <Typography
                          variant="small"
                          color="red"
                          className=" -mt-3 flex items-center  font-normal"
                        >
                          {errors.name?.message}
                        </Typography>
                      )}
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
                        error={errors.surname}
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
                        error={errors.phone}
                      />
                      <Typography className="-mb-2" variant="h6">
                        City:
                      </Typography>
                      <Controller
                        name="city"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                          <Select
                            label="city"
                            placeholder="Adana"
                            menuProps={{ className: "h-48" }}
                            value={value}
                            //defaultValue={address[0].city}
                            onChange={onChange}
                            error={errors.city}
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
                        error={errors.district}
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
                        error={errors.neighborhood}
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
                        error={errors.address}
                      />
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button
                        disabled={!isValid || isSubmitting}
                        type="submit"
                        color="blue"
                        variant="gradient"
                        onClick={() => setOpenEdit(!openEdit)}
                        fullWidth
                      >
                        {isSubmitting && (
                          <FontAwesomeIcon
                            className="mr-2"
                            icon={faCircleNotch}
                            spin
                          />
                        )}
                        Change Address Info!
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </Dialog>
              {/* <Radio
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
                      <div className="flex flex-col gap-1">
                        <button
                          //onClick={() => removeHandler(item?.id)}
                          className="hover:text-red-600"
                        >
                          <FontAwesomeIcon size="lg" icon={faTrashCan} />
                        </button>
                        <button
                          onClick={() => handleOpenEdit(address[0])}
                          className="hover:text-red-600"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                      </div>
                    </div>
                  </div>
                }
              /> */}
            </div>
          ) : (
            <>
              <button
                onClick={handleOpen}
                className="w-2/5 h-1/2 bg-[#2196f3] font-bold text-white border border-blue-gray-200 hover:shadow-md  rounded-md p-3"
              >
                Add Adress
              </button>
            </>
          )}
        </div>
      ),
    },
    {
      label: "Payment Options",
      value: "Payment Options",
      desc: (
        <div className="min-h-48">
          <div className="flex gap-4 mx-4 sm:justify-center sm:mx-0 flex-wrap justify-between items-center">
            <button
              onClick={handleOpenCard}
              className="w-2/5 h-1/2 ml-10 bg-[#2196f3] font-bold text-white border border-blue-gray-200 hover:shadow-md  rounded-md p-3"
            >
              Add Card
            </button>
            {payment.length > 0 ? (
              payment.map((item) => (
                <>
                  <Radio
                    value={item?.id}
                    onChange={(e) => {
                      setCardId(e.target.value);
                    }}
                    color="blue"
                    name="payment"
                    label={
                      <div class="w-80 sm:w-72 h-48 m-auto bg-red-100 rounded-xl relative text-white shadow-md transition-transform transform hover:scale-105">
                        <img
                          class="relative object-cover w-full h-full rounded-xl"
                          src="https://i.imgur.com/kGkSg1v.png"
                        />

                        <div class="w-full px-6 absolute top-4">
                          <div class="flex justify-between">
                            <div class="">
                              <p class="font-bold">Name</p>
                              <p class="font-medium tracking-widest">
                                {item?.name_on_card}
                              </p>
                            </div>
                            <img
                              class="w-14 h-14"
                              src="https://i.imgur.com/bbPHJVe.png"
                            />
                          </div>
                          <div class="pt-1">
                            <p class="font-bold">Card Number</p>
                            <p class="font-medium tracking-more-wider">
                              {item?.card_no}
                            </p>
                          </div>
                          <div class="pt-6 pr-6">
                            <div class="flex justify-between">
                              <div class="">
                                <p class="font-bold text-xs">Expiry Date</p>
                                <p class="font-medium tracking-wider text-sm">
                                  {item?.expire_month}/{item?.expire_year}
                                </p>
                              </div>

                              <div class="flex gap-2 -mr-4">
                                <button
                                  onClick={handleCardDelOpen}
                                  className="px-2 border-blue-gray-200 hover:bg-blue-700 hover:text-red-600 bg-[#60a5fa] border rounded"
                                >
                                  <FontAwesomeIcon
                                    size="lg"
                                    icon={faTrashCan}
                                  />
                                </button>
                                <Dialog
                                  open={openCardDel}
                                  className="w-sm"
                                  size="xs"
                                  handler={handleCardDelOpen}
                                >
                                  <DialogHeader className="grid place-items-center">
                                    <Typography
                                      className="text-center"
                                      variant="h5"
                                      color="blue-gray"
                                    >
                                      You Are Deleting A Card!
                                    </Typography>
                                  </DialogHeader>
                                  <DialogBody className="grid place-items-center gap-4">
                                    <Typography className="text-center font-normal">
                                      Are You Sure You Want To Remove The Card!
                                    </Typography>
                                  </DialogBody>
                                  <DialogFooter className="space-x-2">
                                    <Button
                                      variant="text"
                                      color="blue-gray"
                                      onClick={handleCardDelOpen}
                                    >
                                      Close
                                    </Button>
                                    <Button
                                      variant="gradient"
                                      onClick={() => removeCardHandler(item.id)}
                                    >
                                      Yes, Delete Card!
                                    </Button>
                                  </DialogFooter>
                                </Dialog>
                                <button
                                  onClick={() => handleOpenEditCard(item)}
                                  className="px-2 border-blue-gray-200 bg-[#60a5fa] border rounded hover:bg-blue-700 hover:text-red-600"
                                >
                                  <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </>
              ))
            ) : (
              <></>
            )}
            <Dialog
              open={openCard}
              handler={handleOpenCard}
              className="bg-transparent shadow-none"
            >
              <CardForm openCard={openCard} setOpenCard={setOpenCard} />
            </Dialog>
            <Dialog
              open={openEditCard}
              handler={handleOpenEditCard}
              className="bg-transparent shadow-none"
            >
              <CardEditForm
                editingCard={editingCard}
                openEditCard={openEditCard}
                setOpenEditCard={setOpenEditCard}
              />
            </Dialog>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="flex font-montserrat gap-[1rem] pl-36 sm:pl-0 sm:justify-center py-[2rem] items-center ">
        <Link className="text-[1.6rem] font-[500] text-[#BDBDBD]" to="/cart">
          <FontAwesomeIcon
            className="text-[#BDBDBD] text-[1.6rem] font-[500]"
            icon={faChevronLeft}
          />
          {"  "}
          Back To Cart
        </Link>
      </div>

      <div className="flex sm:flex-col sm:items-center gap-8 justify-center min-h-[500px] my-4">
        <div className="w-3/5 sm:w-4/5">
          <Tabs value="Address Information">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab
                  className="sm: text-center sm:font-bold sm:text-lg"
                  key={value}
                  value={value}
                >
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

        <div className="flex flex-col items-center justify-center gap-4 w-3/12 sm:w-4/5 max-w-80 max-h-80 rounded-lg shadow p-4">
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
          <Button
            disabled={!orderValid || orderCreating}
            onClick={createOrderHandler}
            color="blue"
          >
            {orderCreating && (
              <FontAwesomeIcon className="mr-2" icon={faCircleNotch} spin />
            )}
            Create Order
          </Button>
          {!orderValid && (
            <p className="text-red-700 pb-4 px-4 text-center">
              At least one address and credit card should be selected!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
