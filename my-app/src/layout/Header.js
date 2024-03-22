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
import React, { useState } from "react";
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

const Header = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const fetchState = useSelector((store) => store.userData.fetchState);
  const userData = useSelector((store) => store.userData.user);
  const hash = useSelector((store) => store.userData.hashCode);
  const categories = useSelector((store) => store.global.categories);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openErkekNestedMenu, setOpenErkekNestedMenu] = useState(false);
  const [openKadinNestedMenu, setOpenKadinNestedMenu] = useState(false);

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
                <Popover placement="bottom-end">
                  <PopoverHandler>
                    <li className="text-sm font-bold cursor-pointer">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </li>
                  </PopoverHandler>
                  <PopoverContent className="w-72">
                    <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                      <Avatar
                        src="https://docs.material-tailwind.com/img/team-4.jpg"
                        alt="tania andrew"
                      />
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Tania Andrew
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-medium text-blue-gray-500"
                        >
                          General Manager
                        </Typography>
                      </div>
                    </div>
                    <List className="p-0">
                      <a
                        href="#"
                        className="text-initial font-medium text-blue-gray-500"
                      >
                        <ListItem>
                          <ListItemPrefix>
                            <svg
                              width="14"
                              height="16"
                              viewBox="0 0 14 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                                fill="#90A4AE"
                              />
                            </svg>
                          </ListItemPrefix>
                          ABC Construction
                        </ListItem>
                      </a>
                      <a
                        href="#"
                        className="text-initial font-medium text-blue-gray-500"
                      >
                        <ListItem>
                          <ListItemPrefix>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                                fill="#90A4AE"
                              />
                            </svg>
                          </ListItemPrefix>
                          00 123 456 789
                        </ListItem>
                      </a>
                      <a
                        href="#"
                        className="text-initial font-medium text-blue-gray-500"
                      >
                        <ListItem>
                          <ListItemPrefix>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                                fill="#90A4AE"
                              />
                              <path
                                d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                                fill="#90A4AE"
                              />
                            </svg>
                          </ListItemPrefix>
                          person@example.com
                        </ListItem>
                      </a>
                    </List>
                  </PopoverContent>
                </Popover>
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
