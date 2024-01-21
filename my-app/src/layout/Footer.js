import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-around items-center font-montserrat flex-wrap">
        <div className="flex justify-center items-center border-b-2 py-20 bg-[#FAFAFA] w-full">
          <div className="flex w-9/12 justify-between items-center flex-wrap">
            <a href="#" className="text-[2.4rem] font-[700] text-[#252B42]">
              BrandName
            </a>
            <div className="flex gap-x-[1.5rem] w-[30rem] justify-end text-[#23A6F0]">
              <a href="#" className="text-[2.4rem]">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-[2.4rem]">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-[2.4rem]">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-9/12 py-[2rem] min-h-96 flex-wrap">
          <div id="footer-links" className="flex justify-between flex-wrap">
            <div className="flex flex-col gap-[1rem] flex-1 min-w-44">
              <h5>Company Info</h5>
              <a className="text-[#737373]" href="#">
                About Us
              </a>
              <a className="text-[#737373]" href="#">
                Carrier
              </a>
              <a className="text-[#737373]" href="#">
                We are Hiring!
              </a>
              <a className="text-[#737373]" href="#">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-[1rem] flex-1 min-w-44">
              <h5>Legal</h5>
              <a className="text-[#737373]" href="#">
                About Us
              </a>
              <a className="text-[#737373]" href="#">
                Carrier
              </a>
              <a className="text-[#737373]" href="#">
                We are Hiring!
              </a>
              <a className="text-[#737373]" href="#">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-[1rem] flex-1 min-w-44">
              <h5>Features</h5>
              <a className="text-[#737373]" href="#">
                Business Marketing
              </a>
              <a className="text-[#737373]" href="#">
                User Analytic
              </a>
              <a className="text-[#737373]" href="#">
                Live Chat
              </a>
              <a className="text-[#737373]" href="#">
                Unlimited Support
              </a>
            </div>
            <div className="flex flex-col gap-[1rem] flex-1 min-w-44">
              <h5>Resources</h5>
              <a className="text-[#737373]" href="#">
                iOS & Android
              </a>
              <a className="text-[#737373]" href="#">
                Watch a Demo
              </a>
              <a className="text-[#737373]" href="#">
                Customers
              </a>
              <a className="text-[#737373]" href="#">
                API
              </a>
            </div>
            <div className="flex flex-col gap-[1rem] flex-[8%]">
              <h5>Get in Touch</h5>
              <form className="flex border-black border-solid border-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-[1rem] w-[60%] text-[#737373] bg-[#E6E6E6]"
                />
                <button
                  type="submit"
                  className="p-[0.5rem] w-[40%] bg-[#23A6F0] text-[white] text-[0.875rem]"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[#737373] text-[1.2rem] ">
                Lorem impsum dolor amit
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] w-full flex justify-center items-center">
          <div className="w-9/12">
            <p className="font-[500] text-[#737373] py-[2rem]">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
