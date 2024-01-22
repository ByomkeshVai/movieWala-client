import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { getCurrentUser } from "../../redux/features/auth/AuthSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(getCurrentUser);

  if (user!.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
