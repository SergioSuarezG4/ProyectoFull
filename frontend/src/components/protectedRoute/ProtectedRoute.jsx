import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { usuario, token } = useContext(AuthContext);
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(usuario.role.nombre)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
