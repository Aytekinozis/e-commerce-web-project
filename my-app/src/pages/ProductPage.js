import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Companies from "../components/Companies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "../components/ProductCard";
import {
  faEye,
  faHeart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";
import { Button, Carousel } from "@material-tailwind/react";

const ProductPage = () => {
  const bestSellerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const starsArr = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      width="18"
      viewBox="0 0 576 512"
    >
      <path
        fill="#FFD43B"
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
      />
    </svg>,
    <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B" }} />,
    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />,
  ];
  return (
    <>
      <Header />

      <div className="flex font-montserrat gap-[1rem] pl-48 py-[2rem] items-center bg-[#FAFAFA]">
        <Link className="font-[500] text-[1.6rem]" to="/">
          Home
        </Link>
        <FontAwesomeIcon
          className="text-[#BDBDBD] text-[1.6rem] font-[500]"
          icon={faChevronRight}
        />
        <Link
          className="text-[1.6rem] font-[500] text-[#BDBDBD]"
          to="/ProductListPage"
        >
          Shop
        </Link>
      </div>
      <div className="bg-[#FAFAFA] flex justify-center">
        <div className="w-9/12 flex gap-12">
          <div className="w-1/2 flex flex-col gap-4">
            <Carousel
              transition={{ duration: 1 }}
              className=""
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="/assets/bigproduct.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </Carousel>
            <img className="h-32 w-32" src="/assets/bigproduct.jpg" />
          </div>
          <div className="flex flex-col font-montserrat w-1/2 justify-between pb-32">
            <h3 className="text-xl">Floating Phone</h3>
            <div className="flex gap-2">
              {starsArr[0]}
              {starsArr[0]}
              {starsArr[0]}
              {starsArr[1]}
              {starsArr[2]}
              <p className="text-[#737373]">10 Reviews</p>
            </div>
            <p className="text-2xl">$1,139.33</p>
            <div>
              <p className="text-[#737373]">
                Availability : <span className="text-[#23A6F0]">In Stock</span>
              </p>
            </div>
            <p className="text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="w-full border border-stone-300 my-5"></hr>
            <div className="flex items-center gap-1 pb-3">
              <div class="w-6 h-6 hover:scale-110 bg-blue-500 rounded-full"></div>
              <div class="w-6 h-6 hover:scale-110 bg-teal-700 rounded-full"></div>
              <div class="w-6 h-6 hover:scale-110 bg-orange-400 rounded-full"></div>
              <div class="w-6 h-6 hover:scale-110 bg-black rounded-full"></div>
            </div>
            <div className="flex gap-3">
              <Button className="" color="blue">
                Select Options
              </Button>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-montserrat">
        <div className="flex flex-col w-9/12">
          <div className="flex gap-8 text-[#737373] justify-center py-[2rem] border-b-[#ECECEC] border-b-4">
            <p className="">Description</p>
            <p className="">Additional Information</p>
            <p className="">
              Reviews <span className="text-[#23856D]">(0)</span>
            </p>
          </div>
          <div className="flex gap-10 py-4">
            <div className="w-4/12">
              <img
                className=" w-full h-full rounded-lg object-cover object-center"
                src="/assets/ppdescription.png"
              />
            </div>
            <div className="w-4/12 gap-4 flex flex-wrap">
              <h5 className="text-2xl">the quick fox jumps over</h5>
              <p className=" text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className=" text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className=" text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="w-4/12 flex flex-wrap gap-3">
              <h5 className="text-2xl">the quick fox jumps over</h5>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <h5 className="text-2xl">the quick fox jumps over</h5>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-5 text-[#737373]">
                <FontAwesomeIcon icon={faChevronRight} />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-montserrat">
        <div className="flex flex-col w-9/12">
          <div className="py-[2rem] border-b-[#ECECEC] border-b-4">
            <h3 className="text-2xl">BESTSELLER PRODUCTS</h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-between py-8">
            {bestSellerArr.map(() => (
              <ProductCard />
            ))}
          </div>
        </div>
      </div>
      <Companies />
      <Footer />
    </>
  );
};

export default ProductPage;
