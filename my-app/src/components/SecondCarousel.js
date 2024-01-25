import { Button, Carousel, Typography } from "@material-tailwind/react";

const SecondCarousel = () => {
  return (
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
      <div className="relative h-full w-full bg-[#23856D]">
        <img
          src="https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHTNXW~zSb5ZnhIdIQneoKP4r0KG0e0D2p5MP3ovjFYoPeYz8D-L4Nun~LRCAaHJ0kljq72jJU1~wxoZekDAEYbpGOwTzVCsXyfyZhGSHNJYMIn1qTBNIaVNIkj2cy8neMlZJgYrYIghUQaukHmZPAot6Bk0uCvcOLovmeMEpqpLJpNjvD-UD5stw47Dnoz~1cC4TRh4Y8ijtLWYgCvGNVnjVL0i9w6UCgcyN6ep-uySCf~7NmB7tmyG9j0CAtWn8hut4QBl7YA011sXCkYwhuvFXca8vdJfRHSe1wmkzEekQDN9uT4JwK~Weac0waWwkSRwjUz1uA8ryrqA0lNiWw__"
          alt="image 1"
          className="absolute right-24 bottom-0 object-fill max-h-[43rem]"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-40">
            <p className="text-white font-montserrat mb-20 text-2xl">
              Summer 2020
            </p>
            <Typography
              variant="h1"
              color="white"
              className="mb-20 text-3xl md:text-4xl lg:text-6xl"
            >
              Vita Classic Product
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 max-w-80">
              We know how large objects will act, but things on a small scale.
            </Typography>
            <div className="flex gap-8 items-center">
              <h3 className="font-montserrat text-white text-2xl">$16.48</h3>
              <Button size="lg" color="green">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full bg-[#23856D]">
        <img
          src="https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHTNXW~zSb5ZnhIdIQneoKP4r0KG0e0D2p5MP3ovjFYoPeYz8D-L4Nun~LRCAaHJ0kljq72jJU1~wxoZekDAEYbpGOwTzVCsXyfyZhGSHNJYMIn1qTBNIaVNIkj2cy8neMlZJgYrYIghUQaukHmZPAot6Bk0uCvcOLovmeMEpqpLJpNjvD-UD5stw47Dnoz~1cC4TRh4Y8ijtLWYgCvGNVnjVL0i9w6UCgcyN6ep-uySCf~7NmB7tmyG9j0CAtWn8hut4QBl7YA011sXCkYwhuvFXca8vdJfRHSe1wmkzEekQDN9uT4JwK~Weac0waWwkSRwjUz1uA8ryrqA0lNiWw__"
          alt="image 1"
          className="absolute right-24 bottom-0 object-fill max-h-[43rem]"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-40">
            <p className="text-white font-montserrat mb-20 text-2xl">
              Summer 2020
            </p>
            <Typography
              variant="h1"
              color="white"
              className="mb-20 text-3xl md:text-4xl lg:text-6xl"
            >
              Vita Classic Product
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 max-w-80">
              We know how large objects will act, but things on a small scale.
            </Typography>
            <div className="flex gap-8 items-center">
              <h3 className="font-montserrat text-white text-2xl">$16.48</h3>
              <Button size="lg" color="green">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oERUlvM1ux-mzJ-PNlZRNAgzeGxhZ5DAu7RDXy2IcVBg6Bf5RHqGso9b6S7f6SMIhe~2gc0710rdzQYrYVk4xGarXh4Cz7ExWCEQR0hKfrgQGJO-R~sv-KF94KE1D30k6mf0m~khDGiYab2qhEsO3PuR0zfQnUpiyFJ4-wJZCkEQStwbupQ2E4NzeEFAE8Lm4XRrypQWbjo9V5GEqA4q5Jn4WM-Xv1X1ejZB-lQZxfMOT45cITzDF8trwvPXuGk20tq9Sjmy8HmrVCD1yM8pP5zd~ap8v-rqooHSmcEW877xbgWovDV8pCiCID0U0rIzdaQqmk-oGxU9GjN1a8NqZg__"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-40">
            <p className="text-white font-montserrat mb-20 text-2xl">
              Summer 2020
            </p>
            <Typography
              variant="h1"
              color="white"
              className="mb-20 text-3xl md:text-4xl lg:text-6xl"
            >
              NEW COLLECTION
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 max-w-80">
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
  );
};
export default SecondCarousel;
