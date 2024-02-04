import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

function App() {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ProductListPage" exact>
          <ProductPage />
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
      </Switch>
    </div>
  );
}

export default App;
