import { Radio } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const AddressForm = () => {
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
  return (
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
            <div className="flex flex-col gap-1">
              <button
                onClick={() => removeHandler(item.id)}
                className="hover:text-red-600"
              >
                <FontAwesomeIcon size="lg" icon={faTrashCan} />
              </button>
              <button
                onClick={() => handleOpenEdit(item)}
                className="hover:text-red-600"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <Dialog
                open={openEdit}
                handler={handleOpenEdit}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto max-w-[48rem]">
                  <form onSubmit={handleSubmit(onEditSubmit)}>
                    <CardBody className="flex flex-wrap flex-col gap-4 ">
                      {/* <input
                                  {...register("deneme")}
                                  className="border border-black"
                                  defaultValue={address[0].title}
                                /> */}
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
                        defaultValue={address[0].title}
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
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AddressForm;
