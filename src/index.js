import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Loader from "./components/Loader";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
