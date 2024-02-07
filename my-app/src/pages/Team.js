import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamCard from "../components/TeamCard";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-5 py-20  ">
        <p className="text-center text-[#737373] text-base font-bold font-['Montserrat'] tracking-tight ">
          WHAT WE DO
        </p>
        <h3 className="text-center text-slate-800 text-5xl font-bold font-['Montserrat'] leading-[80px] tracking-tight lg-text-6xl">
          Innovation tailored for you
        </h3>
        <p className="text-center text-neutral-500 text-base font-bold font-['Montserrat']  tracking-tight flex gap-5">
          <span className="text-slate-800">Home</span>
          <img src="/assets/team/rightvector.svg" />
          <span className="text-[#737373]">Team</span>
        </p>
      </div>
      <div className="flex sm:flex-col sm:gap-4 sm:items-center justify-between flex-wrap">
        <img
          src="/assets/team/team1.png"
          className="w-[49%] flex-initial sm:w-11/12"
        />
        <div className="flex flex-initial flex-wrap justify-between gap-3 w-[49%] sm:w-11/12">
          <img className="flex-auto sm:w-5/12" src="/assets/team/team2.png" />
          <img className="flex-auto sm:w-5/12" src="/assets/team/team3.png" />
          <img className="flex-auto sm:w-5/12" src="/assets/team/team4.png" />
          <img className="flex-auto sm:w-5/12" src="/assets/team/team5.png" />
        </div>
      </div>
      <div className="flex flex-col items-center px-[12%] py-20">
        <h3 className="py-32 text-slate-800 text-5xl text-center font-bold font-['Montserrat'] tracking-tight ">
          Meet Our Team
        </h3>
        <div className="flex sm:flex-col flex-wrap gap-10 justify-between">
          {teamarr.map((team) => (
            <TeamCard />
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center my-[5rem] flex flex-col gap-[2rem] sm:w-11/12">
        <h2 className="text-center text-slate-800 text-4xl font-bold font-['Montserrat']  tracking-tight xl:text-5xl">
          Start your 14 days free trial
        </h2>
        <h6 className="w-[40%] mx-auto sm:w-[100%] text-center text-[#737373] text-base font-normal font-['Montserrat'] tracking-tight max-w-md">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <button className="bg-[#23A6F0] text-white w-[13%] sm:w-[50%] mx-auto py-[1rem] rounded-[0.5rem]">
          Try it free now
        </button>
        <div className="flex gap-[2rem] justify-center items-center text-[2.4rem] text-[#23A6f0]">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
