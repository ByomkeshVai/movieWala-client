import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
]);
