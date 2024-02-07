import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Companies from "../components/Companies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const bestSellerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
      <div className="flex justify-center font-montserrat">
        <div className="flex flex-col w-9/12">
          <div className="flex gap-8 text-[#737373] justify-center py-[2rem] border-b-[#ECECEC] border-b-4">
            <p className="">Description</p>
            <p className="">Additional Information</p>
            <p className="">
              Reviews <span className="text-[#23856D]">(0)</span>
            </p>
          </div>
          <div className="flex">
            <div>
              <img src="/assets/ppdescription.png" />
            </div>
            <div>
              <h5>the quick fox jumps over</h5>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div></div>
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
