import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProductContextProvider } from "./Context/filterContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProductContextProvider>
      <App />
    </FilterProductContextProvider>
  </React.StrictMode>
);
