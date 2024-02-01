import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-around items-center font-montserrat">
        <div className="flex flex-col gap-8 max-w-96 pl-8">
          <h5>CONTACT US</h5>
          <h1 className="text-5xl leading-[4rem]">Get in touch today!</h1>
          <h4 className="text-[#737373]">
            We know how large objects will act, but things on a small scale
          </h4>
          <p className="text-xl">Phone ; +451 215 215 </p>
          <p className="text-xl">Fax : +451 215 215</p>
          <div className="text-4xl flex gap-8">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <img src="assets/contactfamily.png" />
      </div>
      <div className="flex flex-col items-center gap-10 px-5 my-4 py-8">
        <p className="text-center text-slate-800 text-base font-bold font-['Montserrat']  tracking-tight">
          VISIT OUR OFFICE
        </p>
        <h3 className="text-center text-slate-800 text-5xl font-bold font-['Montserrat']  tracking-tight max-w-2xl  ">
          We help small businesses with big ideas
        </h3>
      </div>
      <div className="flex flex-wrap justify-center  gap-10 pt-32 pb-20 font-montserrat">
        <div className="py-20 flex flex-col items-center gap-2 p-14 bg-white  ">
          <img src="assets/telephone.svg"></img>
          <p className="text-center text-slate-800 text-base font-bold font-['Montserrat']  tracking-tight">
            georgia.young@example.com
          </p>
          <p className="text-center text-slate-800 text-base font-bold font-['Montserrat']  tracking-tight">
            georgia.young@ple.com
          </p>
          <p className="text-center text-slate-800 text-lg font-bold font-['Montserrat']  tracking-tight pt-5 pb-2">
            Get Support
          </p>
          <Button
            variant="outlined"
            className="rounded-full w-25 h-12"
            color="blue"
          >
            Submit Request
          </Button>
        </div>
        <div className="py-20 flex flex-col items-center gap-2 p-14 bg-[#252B42] text-white">
          <img src="assets/location.svg"></img>
          <p className="text-center text-slate-800 text-base font-bold tracking-tight">
            georgia.young@example.com
          </p>
          <p className="text-center text-slate-800 text-base font-bold tracking-tight">
            georgia.young@ple.com
          </p>
          <p className="text-center text-slate-800 text-lg font-bold tracking-tight pt-5 pb-2">
            Get Support
          </p>
          <Button
            variant="outlined"
            className="rounded-full w-25 h-12"
            color="blue"
          >
            Submit Request
          </Button>
        </div>
        <div className="py-20 flex flex-col items-center gap-2 p-14 bg-white  ">
          <img src="assets/mail.svg"></img>
          <p className="text-center text-slate-800 text-base font-bold tracking-tight">
            georgia.young@example.com
          </p>
          <p className="text-center text-slate-800 text-base font-bold tracking-tight">
            georgia.young@ple.com
          </p>
          <p className="text-center text-slate-800 text-lg font-bold tracking-tight pt-5 pb-2">
            Get Support
          </p>
          <Button
            variant="outlined"
            className="rounded-full w-25 h-12"
            color="blue"
          >
            Submit Request
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
