import React from "react";
import ReactDOM from "react-dom/client"; // Fixed import path
import "./index.css";
import App from "./App"; // Removed .js extension
import Create from "./Create";
import WatchList from "./WatchList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/watchList",
    element: <WatchList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
