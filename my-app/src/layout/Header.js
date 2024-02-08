import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const menuToggle = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="bg-[#252B42] font-montserrat">
        <div className="sm:hidden mx-6 py-[1rem] flex justify-between text-white items-center flex-wrap">
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
      <div className=" py-[1rem] flex justify-between items-center flex-wrap w-11/12">
        <div className="flex sm:flex-wrap justify-between items-center gap-[3rem] w-full pl-10 sm:pl-4">
          <a href="#" className="text-[2.4rem] font-[700]">
            BrandName
          </a>
          <div className="md:hidden gap-4 flex">
            <div>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

            <div className="cursor-pointer" onClick={menuToggle}>
              {menu ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
          <nav className="flex sm:flex-col items-center gap-[3rem] justify-between w-[100%]">
            <div
              className={
                menu
                  ? "flex sm:flex-col gap-[2rem] sm:text-[#737373] sm:text-2xl"
                  : "sm:hidden flex sm:flex-col gap-[2rem] sm:text-[#737373] sm:text-2xl"
              }
            >
              <Link to="/">
                <a href="" className="font-[500]">
                  Home
                </a>
              </Link>
              <Link to="/ProductListPage">
                <a href="" className="font-[500]">
                  Shop
                </a>
              </Link>
              <Link to="/About">
                <a href="" className="font-[500]">
                  About
                </a>
              </Link>

              <Link to="/Contact">
                <a href="" className="font-[500]">
                  Contact
                </a>
              </Link>
              <Link to="/Team">
                <a href="" className="font-[500]">
                  Team
                </a>
              </Link>
            </div>
            <div className="text-sm pr-4">
              <ul className="flex sm:hidden sm:flex-wrap gap-[2rem] text-[#23A6F0]">
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
