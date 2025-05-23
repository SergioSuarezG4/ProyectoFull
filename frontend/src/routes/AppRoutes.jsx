import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import HomeCoworking from "../pages/Home/HomeCoworking";
import CreateSpace from "../components/spaces/form-spaces/FormSpaces";
import UsuarioAdmin from "../pages/admin/UsuariosAdmin";
import SpacesAdmin from "../pages/admin/spaces/SpacesAdmin";
import ModalSpaces from "../components/spaces/modal-spaces/ModalSpaces";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeCoworking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Space" element={<CreateSpace/>}/>
        <Route path="/admin/users" element={<UsuarioAdmin/>}/>
        <Route path="/admin/spaces" element={<SpacesAdmin/>}/>
      </Route>
    </Routes>
  </Router>
);


export default AppRoutes;
