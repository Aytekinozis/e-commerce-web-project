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
  faChevronDown,
  faMagnifyingGlass,
  faRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/userActions";
import {
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import CartProductSm from "../components/CartProductSm";
import { useHistory } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const fetchState = useSelector((store) => store.userData.fetchState);
  const userData = useSelector((store) => store.userData.user);
  const hash = useSelector((store) => store.userData.hashCode);
  const categories = useSelector((store) => store.global.categories);
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openErkekNestedMenu, setOpenErkekNestedMenu] = useState(false);
  const [openKadinNestedMenu, setOpenKadinNestedMenu] = useState(false);

  let total = shoppingCart.reduce((total, item) => {
    return total + item.count * item.product.price;
  }, 0);

  let totalCart = shoppingCart.reduce((total, item) => {
    return total + item.count;
  }, 0);

  const eCategories = categories.filter((cat) => {
    return cat.gender == "e";
  });
  const kCategories = categories.filter((cat) => {
    return cat.gender == "k";
  });

  const handleOpen = () => setOpen(!open);
  const menuToggle = () => {
    setMenu(!menu);
  };

  const logOutHandler = () => {
    dispatch(logout());
    handleOpen();
  };

  useEffect(() => {
    console.log(total.toFixed(2));
  }, [shoppingCart]);

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
                  : "sm:hidden flex sm:flex-col gap-[2rem] sm:text-[#737373] sm:text-2xl items-center"
              }
            >
              <Link to="/">
                <a href="" className="font-[500] hover:underline">
                  Home
                </a>
              </Link>
              <Link to="/shopping">
                <a href="" className="font-[500] hover:underline -mr-6">
                  Shop
                </a>
              </Link>
              <Menu open={openMenu} handler={setOpenMenu} allowHover>
                <MenuHandler>
                  <FontAwesomeIcon
                    className={`h-3.5 w-3.5 hover:cursor-pointer transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                    icon={faChevronDown}
                  />
                </MenuHandler>
                <MenuList className=" w-4 grid-cols-7 gap-3 overflow-visible">
                  <Menu
                    placement="right-start"
                    open={openErkekNestedMenu}
                    handler={setOpenErkekNestedMenu}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem>Erkek</MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {eCategories.map((cat) => (
                        <MenuItem>
                          <Link
                            to={`/shopping/${cat.gender}/${cat.title}/${cat.id}`}
                          >
                            {cat.title}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                  <Menu
                    placement="right-start"
                    open={openKadinNestedMenu}
                    handler={setOpenKadinNestedMenu}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem>Kadin</MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {kCategories.map((cat) => (
                        <MenuItem>
                          <Link
                            to={`/shopping/${cat.gender}/${cat.title}/${cat.id}`}
                          >
                            {cat.title}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </MenuList>
              </Menu>

              <Link to="/About">
                <a href="" className="font-[500] hover:underline">
                  About
                </a>
              </Link>

              <Link to="/Contact">
                <a href="" className="font-[500] hover:underline">
                  Contact
                </a>
              </Link>
              <Link to="/Team">
                <a href="" className="font-[500] hover:underline">
                  Team
                </a>
              </Link>
            </div>
            <div className="text-sm pr-4">
              <ul className="flex items-center sm:hidden sm:flex-wrap gap-[2rem] text-[#23A6F0]">
                <li className="text-sm font-bold cursor-pointer flex gap-[1rem] items-center">
                  {fetchState == FETCH_STATES.NOT_FETCHED ? (
                    <FontAwesomeIcon icon={faUser} />
                  ) : (
                    <></>
                  )}
                  {fetchState == FETCH_STATES.FETCHED ? (
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        key={hash}
                        className="w-8"
                        src={`https://gravatar.com/avatar/${hash}`}
                      ></img>
                      <a>{userData.name}</a>
                      <button
                        onClick={handleOpen}
                        className="ml-2 hover:text-red-600"
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                      </button>
                      <Dialog
                        open={open}
                        className="w-sm"
                        size="xs"
                        handler={handleOpen}
                      >
                        <DialogHeader className="grid place-items-center">
                          <Typography
                            className="text-center"
                            variant="h5"
                            color="blue-gray"
                          >
                            You Are Logging Out!
                          </Typography>
                        </DialogHeader>
                        <DialogBody className="grid place-items-center gap-4">
                          <Typography className="text-center font-normal">
                            Are You Sure You Want To Log Out!
                          </Typography>
                        </DialogBody>
                        <DialogFooter className="space-x-2">
                          <Button
                            variant="text"
                            color="blue-gray"
                            onClick={handleOpen}
                          >
                            Close
                          </Button>
                          <Button variant="gradient" onClick={logOutHandler}>
                            Yes, Log Out!
                          </Button>
                        </DialogFooter>
                      </Dialog>
                    </div>
                  ) : (
                    <div>
                      <Link to="/signIn">
                        <a className="hover:underline">Login</a>
                      </Link>
                      /{" "}
                      <Link to="/signup">
                        <a className="hover:underline">Register</a>
                      </Link>
                    </div>
                  )}
                </li>
                <li className="text-sm font-bold cursor-pointer">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
                <Popover
                  animate={{
                    mount: { scale: 1, y: 10 },
                    unmount: { scale: 0, y: -25 },
                  }}
                  placement="bottom"
                >
                  <PopoverHandler>
                    <li className="text-sm font-bold cursor-pointer">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </li>
                  </PopoverHandler>
                  <PopoverContent className="w-96 flex flex-col">
                    <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Shopping Cart
                        </Typography>
                      </div>
                    </div>
                    {shoppingCart.length > 0 ? (
                      <>
                        <List className=" overflow-auto  max-h-96 p-0 border-b border-blue-gray-50">
                          {shoppingCart.map((product) => (
                            <ListItem ripple={false}>
                              <CartProductSm product={product}></CartProductSm>
                            </ListItem>
                          ))}
                        </List>
                        <Button
                          onClick={() => history.push("/cart")}
                          className="max-w-32 mt-4 place-self-center"
                          color="blue"
                        >
                          Go To Cart!
                        </Button>
                      </>
                    ) : (
                      <p>Shopping Cart Is Empty</p>
                    )}
                  </PopoverContent>
                </Popover>

                <li className="-ml-4">
                  <p>{totalCart}</p>
                </li>
                <li className="text-sm font-bold cursor-pointer">
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li className="-ml-4">
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
