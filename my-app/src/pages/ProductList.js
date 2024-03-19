import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../components/ProductCard";
import Companies from "../components/Companies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faChevronRight,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Option, Select, Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { filterProducts } from "../store/actions/productActions";
import { useParams } from "react-router";

const ProductListPage = () => {
  const categories = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product);
  const catFetchState = useSelector((store) => store.global.catFetchState);
  const sortedCategories = [...categories].sort((a, b) => b.rating - a.rating);
  const topCategories = sortedCategories.slice(0, 5);
  const dispatch = useDispatch();
  const params = useParams();
  const [catId, setCatId] = useState();
  const [filter, setFilter] = useState({ category: "", sort: "" });
  const [value, setValue] = useState("");
  useEffect(() => {
    setCatId(params.catId);
    console.log(catId);
    setFilter({
      ...filter,
      category: params.catId ? parseInt(params.catId) : "",
      sort: value ? value : "",
    });
  }, [params, value]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(filterProducts(filter));
      console.log(filter);
    }, 1000);
  }, [filter]);

  const tempArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <Header />
      <div className="flex sm:flex-col sm:items-center justify-around text-center font-montserrat bg-[#FAFAFA] sm:flex-wrap sm:py-6">
        <div className="flex items-center">
          <h2 className="text-4xl text-center">Shop</h2>
        </div>

        <div className="flex font-montserrat gap-[1rem] pl-48 sm:pl-0 sm:justify-center py-[2rem] items-center bg-[#FAFAFA]">
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
      </div>
      <div className="flex sm:flex-col sm:items-center gap-4 justify-center bg-[#FAFAFA] font-montserrat text-white py-10 sm:flex-wrap">
        {catFetchState == FETCH_STATES.FETCHING ? (
          <Spinner className="h-12 w-12" />
        ) : (
          topCategories.map((cat) => (
            <Link
              to={`/shopping/${cat.gender}/${cat.title}/${cat.id}`}
              className="relative"
              key={cat.id}
            >
              <img className="w-[210px] h-[210px] object-cover" src={cat.img} />
              <p className="absolute inset-20">{cat.title}</p>
              <p className="absolute top-28 left-20 w-24">
                {cat.gender == "k" ? "Kadin" : "Erkek"}
              </p>
            </Link>
          ))
        )}

        {/* <a href="#" className="relative">
          <img className="" src="/assets/shopcover/card-cover-1.png" />
          <p className="absolute inset-20">CLOTHS</p>
          <p className="absolute top-28 left-20 w-24">5 items</p>
        </a>
        <a href="#" className="relative">
          <img className="" src="/assets/shopcover/card-cover-2.png" />
          <p className="absolute inset-20">CLOTHS</p>
          <p className="absolute top-28 left-20 w-24">5 items</p>
        </a>
        <a href="#" className="relative">
          <img className="" src="/assets/shopcover/card-cover-3.png" />
          <p className="absolute inset-20">CLOTHS</p>
          <p className="absolute top-28 left-20 w-24">5 items</p>
        </a>
        <a href="#" className="relative">
          <img className="" src="/assets/shopcover/card-cover-4.png" />
          <p className="absolute inset-20">CLOTHS</p>
          <p className="absolute top-28 left-20 w-24">5 items</p>
        </a>
        <a href="#" className="relative">
          <img className="" src="/assets/shopcover/card-cover-5.png" />
          <p className="absolute inset-20">CLOTHS</p>
          <p className="absolute top-28 left-20 w-24">5 items</p>
        </a> */}
      </div>
      <div className="flex sm:flex-col sm:gap-6 justify-around items-center self-center font-montserrat py-10 sm:flex-wrap">
        <p className="text-[#737373]">{`Showing all ${productData.pcount} results`}</p>
        <div className="flex gap-4 justify-center text-center items-center">
          <p className="text-[#737373]">Vievs:</p>
          <div className="border-2 rounded flex justify-center items-center h-10 w-10 hover:cursor-pointer">
            <FontAwesomeIcon className="size-6" icon={faBorderAll} />
          </div>
          <div className="border-2 rounded flex justify-center items-center h-10 w-10 hover:cursor-pointer">
            <FontAwesomeIcon className="size-6" icon={faListCheck} />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-50">
            <Select
              value={value}
              onChange={(val) => setValue(val)}
              color="blue"
              label="Sort By"
            >
              <Option value="rating:asc"> Rating: Low To High</Option>
              <Option value="rating:desc"> Rating: High To Low</Option>
              <Option value="price:asc">Price: Low To High</Option>
              <Option value="price:desc">Price: High To Low</Option>
            </Select>
          </div>
          <Button color="blue">Filter</Button>
        </div>
      </div>

      <div className="max-w-9/12 flex justify-center items-center text-center py-[5rem] font-montserrat">
        <div className="w-9/12 justify-center items-center flex gap-7 flex-wrap">
          {productData.fetchState == FETCH_STATES.FETCHED ? (
            productData.productList.map((product) => (
              <ProductCard product={product} />
            ))
          ) : (
            <Spinner className="h-12 w-12" />
          )}
        </div>
      </div>
      <Companies />
      <Footer />
    </>
  );
};
export default ProductListPage;
