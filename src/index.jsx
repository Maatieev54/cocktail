import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./provider/router";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
