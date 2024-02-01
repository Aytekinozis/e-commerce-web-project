import { Button } from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Stats from "../components/Stats";
import MeetOurTeam from "../components/MeetOurTeam";

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex font-montserrat max-w-9/12 justify-center items-center my-4 flex-wrap">
        <div className="flex flex-col max-w-sm mr-48 gap-8">
          <h5 className="text-[#252B42]">ABOUT COMPANY</h5>
          <h1 className="text-6xl">ABOUT US</h1>
          <h4 className="text-xl text-[#737373] font-normal">
            We know how large objects will act, but things on a small scale
          </h4>
          <Button size="lg" color="blue">
            Get Quote Now
          </Button>
        </div>
        <div>
          <img src="/assets/none.svg" />
        </div>
      </div>
      <div className="font-montserrat flex justify-center gap-12 my-4 flex-wrap">
        <div className="flex flex-col max-w-sm gap-4">
          <p className="text-[#E74040] text-sm">Problems trying</p>
          <h2 className="text-2xl">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-[#737373] max-w-xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <Stats />
      <div className="flex justify-center my-4">
        <img src="/assets/videocard.svg"></img>
      </div>
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default About;
