import { createBrowserRouter } from "react-router";
import App from "../component/App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Contact from "../pages/Contact";
import Error from "../component/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "favorites", element: <Favorites /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default router;
