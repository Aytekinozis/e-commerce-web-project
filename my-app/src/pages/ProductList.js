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
import {
  Button,
  IconButton,
  Input,
  Option,
  Select,
  Spinner,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { filterProducts, setActivePage } from "../store/actions/productActions";
import { useParams } from "react-router";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ProductListPage = () => {
  const categories = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product);
  const catFetchState = useSelector((store) => store.global.catFetchState);
  const sortedCategories = [...categories].sort((a, b) => b.rating - a.rating);
  const topCategories = sortedCategories.slice(0, 5);
  const dispatch = useDispatch();
  const params = useParams();
  const [catId, setCatId] = useState();
  const [filter, setFilter] = useState({
    category: "",
    sort: "",
    filter: "",
    offset: 0,
  });
  const [value, setValue] = useState("");
  useEffect(() => {
    setCatId(params.catId);
    //console.log(catId);
    setFilter({
      ...filter,
      category: params.catId ? parseInt(params.catId) : "",
      sort: value ? value : "",
    });

    setActive(1);
  }, [params, value]);

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [catId, filter.offset]);

  const filterHandler = () => {
    dispatch(filterProducts(filter));
  };

  //-------Paginatiion--------
  const [active, setActive] = useState(productData.activePage);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset((active - 1) * 25);
    dispatch(setActivePage(active));
  }, [active]);

  useEffect(() => {
    setFilter({ ...filter, offset: offset });

    console.log(offset);
  }, [offset]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === productData.pageCount) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const forthPagination = () => {
    if (active == productData.pageCount - 1) {
      return active;
    }
    if (active == productData.pageCount) {
      return active - 1;
    }
    if (active >= 4) {
      return active + 1;
    } else {
      return 4;
    }
  };

  const thirdPagination = () => {
    if (productData.pageCount > 4) {
      if (active == productData.pageCount - 2) {
        return active;
      }
      if (active == productData.pageCount - 1) {
        return active - 1;
      }
      if (active == productData.pageCount) {
        return active - 2;
      }
      if (active >= 4) {
        return active;
      } else {
        return 3;
      }
    } else {
      return 3;
    }
  };

  const secondPagination = () => {
    if (productData.pageCount > 4) {
      if (active == productData.pageCount - 3) {
        return active - 1;
      }
      if (active == productData.pageCount - 2) {
        return active - 1;
      }
      if (active == productData.pageCount - 1) {
        return active - 2;
      }
      if (active == productData.pageCount) {
        return active - 3;
      }
      if (active >= 4) {
        return active - 1;
      } else {
        return 2;
      }
    } else {
      return 2;
    }
  };

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
              <img
                className="w-[210px] h-[210px] object-cover hover:opacity-80"
                src={cat.img}
              />
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
      <div className="flex mx-32 sm:mx-0 sm:flex-col sm:gap-6 justify-around items-center self-center font-montserrat py-10 sm:flex-wrap">
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
        <div className="flex gap-4 sm:flex-col">
          <div className="w-50">
            <Input
              onChange={(e) => {
                setFilter({ ...filter, filter: e.target.value });
              }}
              color="blue"
              label="Filter By"
            />
          </div>
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
          <Button onClick={filterHandler} color="blue">
            Filter
          </Button>
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
      <div className="flex justify-center items-center gap-4 sm:gap-1">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2 sm:gap-1">
          <IconButton {...getItemProps(1)}>1</IconButton>
          {productData.pageCount > 2 ? (
            <IconButton {...getItemProps(secondPagination())}>
              {secondPagination()}
            </IconButton>
          ) : (
            <></>
          )}

          {productData.pageCount > 3 ? (
            <IconButton {...getItemProps(thirdPagination())}>
              {thirdPagination()}
            </IconButton>
          ) : (
            <></>
          )}

          {productData.pageCount > 4 ? (
            <IconButton {...getItemProps(forthPagination())}>
              {forthPagination()}
            </IconButton>
          ) : (
            <></>
          )}
          {productData.pageCount > 2 ? (
            <IconButton {...getItemProps(productData.pageCount)}>
              {productData.pageCount}
            </IconButton>
          ) : (
            <></>
          )}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === productData.pageCount}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
      <Companies />
      <Footer />
    </>
  );
};
export default ProductListPage;
