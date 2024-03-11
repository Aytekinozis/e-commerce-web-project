import { useForm } from "react-hook-form";
import { API } from "../api/api";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios, { Axios } from "axios";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    API.post("/login", data)
      .then((res) => {
        toast.success(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    console.log(data);
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center py-8">
        <Card className="px-8 py-8" color="transparent" shadow={true}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Welcome Back! Enter your details to Sign In.
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-4">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
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
                  required: "You Must Enter Your Password!",
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
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Create a new account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
