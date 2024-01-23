import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./AdminRoutes";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BackendLayout from "../components/layout/Backend/BackendLayout";
import ProtectedRoute from "../components/layout/ProtectedRoutes";
import { routeGenerator } from "../utils/routerGenerator";

import { userPaths } from "./UserRoutes";
import FrontendOutlet from "../components/layout/Frontend/FrontendOutlet";
import SingleContentMain from "../pages/SingleContent/SingleContentMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendOutlet />,
  },
  {
    path: "/singleContent/:category/:itemId",
    element: <SingleContentMain />,
  },
  {
    path: "/",
    element: <App />,
    children: routeGenerator(userPaths),
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
    element: (
      <ProtectedRoute>
        <BackendLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
]);
