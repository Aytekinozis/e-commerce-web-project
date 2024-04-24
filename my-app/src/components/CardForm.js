import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import { getPayment } from "../store/actions/shoppingCartActions";
import { API } from "../api/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const CardForm = ({ setOpenCard, openCard }) => {
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
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { id, ...postData } = data;
    console.log(postData);
    API.post("/user/card", postData)
      .then((res) => {
        console.log(res);
        dispatch(getPayment());
        toast.success("New Payment Card added!");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });

    //console.log(data);
  };
  return (
    <Card className="mx-auto max-w-[48rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-wrap flex-col gap-4 ">
          <Typography variant="h4" color="blue-gray">
            Add Card
          </Typography>

          <Typography className="-mb-2" variant="h6">
            Card No:
          </Typography>
          <Input
            {...register("card_no", {
              required: "You Must Enter Your Card No!",
              pattern: {
                value:
                  /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/,
                message: "Invalid Card Number",
              },
              minLength: {
                value: 16,
                message: "Minimum 16 Characters!",
              },
            })}
            label="Card No"
            placeholder="0000 0000 0000 0000"
            size="md"
            className=""
            error={errors.card_no}
            maxLength={16}
          />
          {errors.card_no && (
            <Typography
              variant="small"
              color="red"
              className=" -mt-3 flex items-center  font-normal"
            >
              {errors.card_no?.message}
            </Typography>
          )}
          <Typography className="-mb-2" variant="h6">
            Expire Month:
          </Typography>
          <Input
            {...register("expire_month", {
              required: "You Must Enter Expire Month!",
              pattern: {
                value: /^[0-1][0-9]$/,
                message: "Invalid month",
              },
              max: { value: 12, message: "Enter A Valid Month" },
              minLength: {
                value: 2,
                message: "Minimum 2 Characters!",
              },
            })}
            label="Expire Month"
            error={errors.expire_month}
            maxLength={2}
          />
          {errors.expire_month && (
            <Typography
              variant="small"
              color="red"
              className=" -mt-3 flex items-center  font-normal"
            >
              {errors.expire_month?.message}
            </Typography>
          )}
          <Typography className="-mb-2" variant="h6">
            Expire Year:
          </Typography>
          <Input
            {...register("expire_year", {
              required: "You Must Enter Expire Year!",
              pattern: {
                value: /^[2][0-9][0-9][0-9]$/,
                message: "Invalid Year",
              },
              //max: { value: 12, message: "Enter A Valid Month" },
              minLength: {
                value: 4,
                message: "Minimum 4 Characters!",
              },
            })}
            label="Expire Year"
            error={errors.expire_year}
            maxLength={4}
          />
          {errors.expire_year && (
            <Typography
              variant="small"
              color="red"
              className=" -mt-3 flex items-center  font-normal"
            >
              {errors.expire_year?.message}
            </Typography>
          )}
          <Typography className="-mb-2" variant="h6">
            Name On Card:
          </Typography>
          <Input
            {...register("name_on_card", {
              required: "You Must Enter Your Name!",
              minLength: {
                value: 3,
                message: "Minimum 3 Characters!",
              },
            })}
            label="Name On Card"
            error={errors.name_on_card}
          />
          {errors.name_on_card && (
            <Typography
              variant="small"
              color="red"
              className=" -mt-3 flex items-center  font-normal"
            >
              {errors.name_on_card?.message}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            disabled={!isValid || isSubmitting}
            type="submit"
            color="blue"
            variant="gradient"
            onClick={() => setOpenCard(!openCard)}
            fullWidth
          >
            {isSubmitting && (
              <FontAwesomeIcon className="mr-2" icon={faCircleNotch} spin />
            )}
            Add New Card
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CardForm;
