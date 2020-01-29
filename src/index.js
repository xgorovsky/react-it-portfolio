import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./components/Loader";
import "./i18n";
const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
