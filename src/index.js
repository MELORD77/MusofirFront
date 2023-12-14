import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Loading = lazy(() => import("./pages/Loading"));
const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AnimatePresence>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </AnimatePresence>
  </BrowserRouter>
);

reportWebVitals();
