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
