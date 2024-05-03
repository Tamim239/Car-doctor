import { Navigate, useLocation } from "react-router-dom";
import { UseAuth } from "../Hook/UseAuth";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (user?.email) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};
