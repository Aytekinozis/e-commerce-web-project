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

  const onSubmit = (data) => {
    const { id, ...postData } = data;
    console.log(postData);
    /* API.post("/user/address", postData)
      .then((res) => {
        console.log(res);
        dispatch(getAddress());
        toast.success("New address added!");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      }); */
    //const { passconfirm, ...postdata } = data;

    console.log(data);
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
              minLength: {
                value: 3,
                message: "Minimum 3 Characters!",
              },
            })}
            label="Card No"
            placeholder="0000 0000 0000 0000"
            size="md"
            className=""
            error={errors.card_no}
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
              minLength: {
                value: 2,
                message: "Minimum 2 Characters!",
              },
            })}
            label="Expire Month"
            error={errors.expire_month}
          />
          <Typography className="-mb-2" variant="h6">
            Expire Year:
          </Typography>
          <Input
            {...register("expire_year", {
              required: "You Must Enter Expire Year!",
              minLength: {
                value: 2,
                message: "Minimum 2 Characters!",
              },
            })}
            label="Expire Year"
            error={errors.expire_year}
          />
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
            Add New Address
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CardForm;
