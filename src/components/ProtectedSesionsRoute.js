import { Navigate } from "react-router-dom";

const ProtectedSesionsRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/profile" />;
  }
  return children;
};

export default ProtectedSesionsRoute;
