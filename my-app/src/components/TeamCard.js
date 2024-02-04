import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamCard = () => {
  return (
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
  );
};
export default TeamCard;
