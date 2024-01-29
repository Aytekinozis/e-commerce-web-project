import { Button, Carousel, Typography } from "@material-tailwind/react";
import Header from "../layout/Header";

const Hero = () => {
  return (
    <>
      <Header />
      <Carousel
        transition={{ duration: 1 }}
        className="h-[60rem]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oERUlvM1ux-mzJ-PNlZRNAgzeGxhZ5DAu7RDXy2IcVBg6Bf5RHqGso9b6S7f6SMIhe~2gc0710rdzQYrYVk4xGarXh4Cz7ExWCEQR0hKfrgQGJO-R~sv-KF94KE1D30k6mf0m~khDGiYab2qhEsO3PuR0zfQnUpiyFJ4-wJZCkEQStwbupQ2E4NzeEFAE8Lm4XRrypQWbjo9V5GEqA4q5Jn4WM-Xv1X1ejZB-lQZxfMOT45cITzDF8trwvPXuGk20tq9Sjmy8HmrVCD1yM8pP5zd~ap8v-rqooHSmcEW877xbgWovDV8pCiCID0U0rIzdaQqmk-oGxU9GjN1a8NqZg__"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-3/4 pl-36">
              <p className="text-white font-montserrat mb-20 text-2xl">
                Summer 2020
              </p>
              <Typography
                variant="h1"
                color="white"
                className="mb-20 text-[3.62rem]"
              >
                NEW COLLECTION
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 max-w-80 text-[1.25rem]"
              >
                We know how large objects will act, but things on a small scale.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="green">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oERUlvM1ux-mzJ-PNlZRNAgzeGxhZ5DAu7RDXy2IcVBg6Bf5RHqGso9b6S7f6SMIhe~2gc0710rdzQYrYVk4xGarXh4Cz7ExWCEQR0hKfrgQGJO-R~sv-KF94KE1D30k6mf0m~khDGiYab2qhEsO3PuR0zfQnUpiyFJ4-wJZCkEQStwbupQ2E4NzeEFAE8Lm4XRrypQWbjo9V5GEqA4q5Jn4WM-Xv1X1ejZB-lQZxfMOT45cITzDF8trwvPXuGk20tq9Sjmy8HmrVCD1yM8pP5zd~ap8v-rqooHSmcEW877xbgWovDV8pCiCID0U0rIzdaQqmk-oGxU9GjN1a8NqZg__"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-3/4 pl-36">
              <p className="text-white font-montserrat mb-20 text-2xl">
                Summer 2020
              </p>
              <Typography
                variant="h1"
                color="white"
                className="mb-20 text-[3.62rem]"
              >
                NEW COLLECTION
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 max-w-80 text-[1.25rem]"
              >
                We know how large objects will act, but things on a small scale.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="green">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oERUlvM1ux-mzJ-PNlZRNAgzeGxhZ5DAu7RDXy2IcVBg6Bf5RHqGso9b6S7f6SMIhe~2gc0710rdzQYrYVk4xGarXh4Cz7ExWCEQR0hKfrgQGJO-R~sv-KF94KE1D30k6mf0m~khDGiYab2qhEsO3PuR0zfQnUpiyFJ4-wJZCkEQStwbupQ2E4NzeEFAE8Lm4XRrypQWbjo9V5GEqA4q5Jn4WM-Xv1X1ejZB-lQZxfMOT45cITzDF8trwvPXuGk20tq9Sjmy8HmrVCD1yM8pP5zd~ap8v-rqooHSmcEW877xbgWovDV8pCiCID0U0rIzdaQqmk-oGxU9GjN1a8NqZg__"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-3/4 pl-36">
              <p className="text-white font-montserrat mb-20 text-2xl">
                Summer 2020
              </p>
              <Typography
                variant="h1"
                color="white"
                className="mb-20 text-[3.62rem]"
              >
                NEW COLLECTION
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 max-w-80 text-[1.25rem]"
              >
                We know how large objects will act, but things on a small scale.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="green">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
