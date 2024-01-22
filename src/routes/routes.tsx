import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./AdminRoutes";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BackendLayout from "../components/layout/Backend/BackendLayout";
import ProtectedRoute from "../components/layout/ProtectedRoutes";

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
    element: (
      <ProtectedRoute>
        <BackendLayout />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
]);
