import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <>
      <div className="bg-[#252B42] font-montserrat">
        <div className="max-md:hidden container mx-6 py-[1rem] flex justify-between color text-white items-center flex-wrap">
          <div className="flex gap-x-[3rem]">
            <button className="flex items-center gap-x-[0.5rem]">
              <i className="fa-solid fa-phone decoration-white"></i>
              (225) 555-0118
            </button>
            <button className="flex items-center gap-x-[0.5rem]">
              <i class="fa-regular fa-envelope"></i>
              michelle.rivera@example.com
            </button>
          </div>
          <div>
            <h6>Follow us and get a chance to win 80% off!</h6>
          </div>
          <div className="flex items-center gap-x-[1rem]">
            <h6>Follow us : </h6>
            <div className="flex items-center gap-x-[1rem]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[1rem] flex flex-wrap">
        <div className="flex justify-between items-center gap-[3rem] w-[100%]">
          <a href="#" className="text-[2.4rem] font-[700]">
            BrandName
          </a>
          <nav className="flex items-center gap-[3rem] justify-between w-[100%]">
            <div className="flex gap-[2rem]">
              <Link to="/">
                <a href="" className="font-[500]">
                  Home
                </a>
              </Link>
              <a href="" className="font-[500]">
                Shop
              </a>
              <a href="" className="font-[500]">
                About
              </a>
              <a href="" className="font-[500]">
                Blog
              </a>
              <a href="" className="font-[500]">
                Contact
              </a>
              <a href="" className="font-[500]">
                Pages
              </a>
            </div>
            <div className="text-sm pr-4">
              <ul className="flex gap-[2rem] text-[#23A6F0]">
                <li className="text-sm font-bold cursor-pointer flex gap-[1rem] items-center">
                  <FontAwesomeIcon icon={faUser} />
                  <div>Login / Register</div>
                </li>
                <li className="text-sm font-bold cursor-pointer">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
                <li className="text-sm font-bold cursor-pointer">
                  <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <li>
                  <p>1</p>
                </li>
                <li className="text-sm font-bold cursor-pointer">
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li>
                  <p>1</p>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
