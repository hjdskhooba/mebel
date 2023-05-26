import { BrowserRouter } from "react-router-dom";
import Context from "./config/context/Context.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
