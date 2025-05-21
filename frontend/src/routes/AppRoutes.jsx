import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register";
import HomeCoworking from "../pages/home/HomeCoworking";
import CreateSpace from "../pages/Space/CreateSpace";
import UsuarioAdmin from "../pages/admin/UsuariosAdmin";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeCoworking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Space" element={<CreateSpace/>}/>
        <Route path="/admin/users" element={<UsuarioAdmin/>}/>
      </Route>
    </Routes>
  </Router>
);


export default AppRoutes;
