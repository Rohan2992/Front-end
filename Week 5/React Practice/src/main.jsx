import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback=<h1>New Comp...</h1>>
      <App />
    </Suspense>
  </React.StrictMode>
);
