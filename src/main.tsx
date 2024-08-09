import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { ServiceItem } from "./page/ServiceItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/service/:id",
    element: <ServiceItem />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
