import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { CartScreen } from "./screens/CartScreen";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App></App>}
      errorElement={
        <>
          <h1 className="m-3">Area 51</h1>
          <Link to="/" className="btn btn-dark mx-3">
            Go Back
          </Link>
        </>
      }
    >
      <Route index element={<HomeScreen></HomeScreen>}></Route>
      <Route
        path="/products/:productId"
        element={<ProductScreen></ProductScreen>}
      ></Route>
      <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
