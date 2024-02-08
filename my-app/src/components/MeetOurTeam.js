import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MeetOurTeam = () => {
  return (
    <div className="flex flex-col my-8 font-montserrat items-center">
      <div className="flex flex-col gap-4 items-center my-10 sm:w-10/12">
        <h2 className="text-[2.5rem]">Meet Our Team</h2>
        <p className="text-sm text-[#737373] max-w-[30rem] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex gap-8 justify-center items-center sm:flex-wrap">
        <div className="flex flex-col justify-center items-center gap-4 shadow hover:scale-110 hover:shadow-2xl">
          <img src="/assets/team-1-user-1.png" />
          <h5>Username</h5>
          <h6 className="text-[#737373]">Profession</h6>
          <div className="text-[#23A6F0] text-4xl flex gap-4 my-4">
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 shadow hover:scale-110 hover:shadow-2xl">
          <img src="/assets/team-1-user-2.png" />
          <h5>Username</h5>
          <h6 className="text-[#737373]">Profession</h6>
          <div className="text-[#23A6F0] text-4xl flex gap-4 my-4">
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 shadow hover:scale-110 hover:shadow-2xl">
          <img src="/assets/team-1-user-3.png" />
          <h5>Username</h5>
          <h6 className="text-[#737373]">Profession</h6>
          <div className="text-[#23A6F0] text-4xl flex gap-4 my-4">
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
