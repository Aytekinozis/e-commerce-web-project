import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductList";

function App() {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ProductPage" exact>
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
