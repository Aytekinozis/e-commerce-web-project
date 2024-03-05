import { API } from "../api/api";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useForm } from "react-hook-form";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { getRoles } from "../store/actions/globalActions";
import { useDispatch, useSelector } from "react-redux";
import axios, { Axios } from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      role_id: "3",
    },
  });
  const [roles, setRoles] = useState();
  const roles1 = useSelector((store) => store.global.roles);
  const [optvalue, setOptValue] = useState("Müşteri");
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { passconfirm, ...postdata } = data;

    /* axios
      .post("http://localhost:9000/workintech/signup/register", postdata)
      .then((res) => {
        toast.success(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      }); */

    API.post("/signup", postdata)
      .then((res) => {
        toast.success(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    console.log(postdata);
    //console.log(roles);
  };

  useEffect(() => {
    if (roles1.length == 0) {
      dispatch(getRoles());
    }
  }, []);

  useEffect(() => {
    API.get("/roles")
      .then((res) => {
        setRoles(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        toast.error(
          "Roles yüklenirken bir hata ile karşılaşıldı: " + err.message
        );
      });

    getRoles();
    setTimeout(() => {
      console.log(roles);
      console.log("---------");
      console.log(roles1);
    }, 2000);
  }, []);

  const role = watch("role_id");

  return (
    <div>
      <Header></Header>
      <div className="flex justify-center py-8">
        <Card className="px-8 py-8" color="transparent" shadow={true}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-4">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                {...register("name", {
                  required: "You Must Enter Your Name!",
                  minLength: { value: 3, message: "Minimum 3 Characters!" },
                })}
                size="lg"
                placeholder="Your Name Here"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                {...register("email", {
                  required: "You Must Enter Your Email!",
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
                    message: "Please Enter A Valid Email Adress!",
                  },
                })}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                {...register("password", {
                  required: "You Must Enter Password!",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Please Enter A Valid Password!",
                  },
                })}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Confirm Password
              </Typography>
              <Input
                {...register("passconfirm", {
                  required: "You Must Enter Password!",
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Please Enter A Valid Password!",
                  },
                })}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.passconfirm && (
                <p className="text-red-500">{errors.passconfirm?.message}</p>
              )}
              <div className="w-76">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Role
                </Typography>
                <select
                  className="bg-gray-50 border border-gray-300
                  text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black
                    dark:focus:border-black"
                  {...register("role_id", { required: "aman" })}
                  label="Role"
                  value={watch("role_id")}
                >
                  <option selected index={3} value={roles && roles[2].id}>
                    {roles && roles[2].code}
                  </option>
                  <option index={1} value={roles && roles[0].id}>
                    {roles && roles[0].code}
                  </option>
                  <option index={2} value={roles && roles[1].id}>
                    {roles && roles[1].code}
                  </option>
                </select>
              </div>
              {role === "2" && (
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Store Name
                  </Typography>
                  <Input
                    {...register("store.name", {
                      required: "You Must Enter Store Name!",
                      minLength: { value: 3, message: "Minimum 3 Characters!" },
                    })}
                    size="lg"
                    placeholder="Store Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.store?.name && (
                    <p className="text-red-500">
                      {errors.store?.name?.message}
                    </p>
                  )}
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Store Phone
                  </Typography>
                  <Input
                    {...register("store.phone", {
                      required: "You Must Enter Store Phone!",
                      pattern: {
                        value:
                          /^(\+90|0)?\s*(\(\d{3}\)[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}|\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}|\(\d{3}\)[\s-]*\d{7}|\d{3}[\s-]*\d{3}[\s-]*\d{4}|\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2})$/,
                        message: "Please Enter A Valid Phone Number!",
                      },
                    })}
                    size="lg"
                    placeholder="Store Phone"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.store?.phone && (
                    <p className="text-red-500">
                      {errors.store?.phone?.message}
                    </p>
                  )}
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Store Tax ID
                  </Typography>
                  <Input
                    {...register("store.tax_no", {
                      required: "You Must Enter Tax ID!",
                      pattern: {
                        value: /[T]\d{4}[V]\d{6}$/,
                        message: "Please Enter A Valid Tax ID!",
                      },
                    })}
                    size="lg"
                    placeholder="Store Tax ID"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.store?.tax_no && (
                    <p className="text-red-500">
                      {errors.store?.tax_no?.message}
                    </p>
                  )}
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Store Bank Account
                  </Typography>
                  <Input
                    {...register("store.bank_account", {
                      required: "You Must Enter Store Bank Account!",
                      pattern: {
                        value:
                          /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
                        message: "Please Enter A Valid Iban Adress!",
                      },
                    })}
                    size="lg"
                    placeholder="Store Bank Account"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.store?.bank_account && (
                    <p className="text-red-500">
                      {errors.store?.bank_account?.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              className="mt-6"
              fullWidth
            >
              {isSubmitting && (
                <FontAwesomeIcon className="mr-2" icon={faCircleNotch} spin />
              )}
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SignUp;
