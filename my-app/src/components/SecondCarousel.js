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
          src="/assets/home/hero-slide2.png"
          alt="image 1"
          className="absolute right-24 bottom-0 object-fill max-h-[43rem]"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-40">
            <p className="text-white font-montserrat mb-20 text-2xl">
              Summer 2020
            </p>
            <h1 className="mb-20 text-white font-bold tracking-wider max-w-96 leading-[5rem] text-6xl">
              Vita Classic Product
            </h1>
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
          src="/assets/home/hero-slide2.png"
          alt="image 1"
          className="absolute right-24 bottom-0 object-fill max-h-[43rem]"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-40">
            <p className="text-white font-montserrat mb-20 text-2xl">
              Summer 2020
            </p>
            <h1 className="mb-20 text-white font-bold tracking-wider max-w-96 leading-[5rem] text-6xl">
              Vita Classic Product
            </h1>
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
          src="/assets/home/hero-slide2.png"
          alt="image 1"
          className="absolute right-24 bottom-0 object-fill max-h-[43rem]"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-40">
            <p className="text-white font-montserrat mb-20 text-2xl">
              Summer 2020
            </p>
            <h1 className="mb-20 text-white font-bold tracking-wider max-w-96 leading-[5rem] text-6xl">
              Vita Classic Product
            </h1>
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
    </Carousel>
  );
};
export default SecondCarousel;
