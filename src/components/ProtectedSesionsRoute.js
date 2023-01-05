import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedSesionsRoute = ({ children }) => {
  const state = useSelector((state) => state);
  if (state.isLogged) {
    return <Navigate to="/profile" />;
  }
  return children;
};

export default ProtectedSesionsRoute;
