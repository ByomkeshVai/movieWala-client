import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./AdminRoutes";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
]);
