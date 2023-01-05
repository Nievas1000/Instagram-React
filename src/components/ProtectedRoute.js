import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const state = useSelector((state) => state);
  if (!state.isLogged) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
