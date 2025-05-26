import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/Auth/Register";
import HomeCoworking from "../pages/Home/HomeCoworking";
import UsuarioAdmin from "../pages/admin/users/UsuariosAdmin";
import SpacesAdmin from "../pages/admin/spaces/SpacesAdmin";
import BookingsAdmin from "../pages/admin/bookings/BookingsAdmin";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import Logout from "../pages/auth/Logout";
import BookingsClient from "../pages/client/bookings/BookingsCliente";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas públicas */}
          <Route index element={<HomeCoworking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />


          {/* Rutas protegidas para roles específicos */}
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <UsuarioAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/spaces"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <SpacesAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <BookingsAdmin />
              </ProtectedRoute>
            }
          />
          {/* Ruta para roles de clientes. */}
          <Route
            path="/cliente/reservas"
            element={
              <ProtectedRoute allowedRoles={["cliente"]}>
                <BookingsClient/>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
