import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import ProductListPage from "./pages/ProductList";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useDispatch } from "react-redux";
import { setUser, verify } from "./store/actions/userActions";

import { FETCH_STATES } from "./store/reducers/productReducer";
import { API } from "./api/api";
import { useEffect } from "react";
import { getCategories } from "./store/actions/globalActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verify());
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shopping/:gender?/:category?" exact>
          <ProductListPage />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Team" exact>
          <Team />
        </Route>
        <Route path="/ProductPage" exact>
          <ProductPage />
        </Route>
        <Route path="/signUp" exact>
          <SignUp />
        </Route>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
