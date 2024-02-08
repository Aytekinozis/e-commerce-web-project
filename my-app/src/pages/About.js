import { Button } from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Stats from "../components/Stats";
import MeetOurTeam from "../components/MeetOurTeam";
import Companies from "../components/Companies";

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex sm:flex-col sm:gap-8 font-montserrat max-w-9/12 justify-center items-center my-4 flex-wrap">
        <div className="flex flex-col sm:justify-center sm:gap-12 sm:text-center max-w-sm mr-48 sm:mr-0 sm:py-8 gap-8">
          <h5 className="text-[#252B42] sm:hidden">ABOUT COMPANY</h5>
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
      <div className="font-montserrat sm:text-center sm:py-8 flex justify-center gap-12 my-4 flex-wrap">
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
        <img className=" sm:w-10/12" src="/assets/videocard.svg"></img>
      </div>
      <MeetOurTeam />
      <div className="flex flex-col my-8 sm:text-center font-montserrat items-center pt-4 bg-[#FAFAFA]">
        <h2 className="text-[2.5rem] sm:w-10/12">Big Companies Are Here</h2>
        <p className="text-sm text-[#737373] max-w-[30rem] text-center sm:w-10/12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <Companies />
      </div>
      <div className="relative sm:static flex sm:flex-col sm:justify-center sm:py-10  bg-[#2A7CC7] text-white justify-end font-montserrat">
        <div className=" absolute sm:static sm:text-center left-32 top-40 flex flex-col sm:items-center gap-8 pr-8 max-w-2xl">
          <h5>WORK WITH US</h5>
          <h2 className="text-5xl">Now Let’s grow Yours</h2>
          <p className="text-[#FFFFFF] font-extralight">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <Button className="w-32" color="white" variant="outlined">
            Button
          </Button>
        </div>
        <img className="sm:hidden" src="/assets/unsplash.png"></img>
      </div>
      <Footer />
    </div>
  );
};

export default About;
