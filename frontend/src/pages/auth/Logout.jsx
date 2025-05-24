import { useEffect, useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router";

const  Logout =( ) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, []);

  return null;
}

export default Logout;