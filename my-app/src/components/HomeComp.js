import { Button } from "@material-tailwind/react";

const HomeComp = () => {
  return (
    <div className="flex font-montserrat gap-32 justify-center">
      <div>
        <img className="max-w-[60rem]" src="/assets/home/redscarf.png" />
      </div>
      <div className="flex flex-col gap-6 justify-center max-w-[25rem]">
        <h5 className="text-[#BDBDBD]">SUMMER 2020</h5>
        <h1 className="text-[2.5rem]">Part of the Neural Universe</h1>
        <h4 className="text-[#737373] text-xl">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex gap-4">
          <Button size="lg" color="green">
            BUY NOW
          </Button>
          <Button color="green" variant="outlined" size="lg">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
