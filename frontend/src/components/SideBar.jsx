import { FastField } from "formik";
import { useState } from "react";
import {
  FiUser,
  FiUserPlus,
  FiHome,
  FiUsers,
  FiClipboard,
  FiUserCheck,
  FiCalendar,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuItems = {
  guest: [
    { name: "Home", path: "/", icon: FiHome },
    { name: "Iniciar Sesion", path: "/login", icon: FiUser },
    { name: "Registrarse", path: "/register", icon: FiUserPlus },
  ],
  admin: [
    { name: "Dashboard", path: "/admin/dashboard", icon: FiHome },
    { name: "Usuarios", path: "/admin/users", icon: FiUsers },
    { name: "Reportes", path: "/admin/reports", icon: FiClipboard },
  ],
  recepcionista: [
    { name: "Check-in", path: "/recepcionista/checkin", icon: FiUserCheck },
    { name: "Check-out", path: "/recepcionista/checkout", icon: FiUserCheck },
  ],
  cliente: [
    { name: "Mis Reservas", path: "/cliente/reservas", icon: FiCalendar },
    { name: "Mi Perfil", path: "/cliente/perfil", icon: FiUsers },
  ],
};

const SideBar = ({ rol = "admin" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentItems = menuItems[rol] || [];

  return (
    <div className="flex">
      <aside
        className={`bg-gray-600 fixed top-0 left-0 z-40 h-full p-4 text-white transition-width duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="mb-6 flex justify-end w-full text-white hover:text-gray-300"
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>

        <ul className="space-y-4">
          {currentItems.map((item) => (
            <li key={item.name} className="flex items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500 ${
                    isActive ? "bg-gray-500" : ""
                  } w-full`
                }
              >
                <item.icon className="text-lg" />
                <span className={`${isOpen ? "inline" : "hidden"}`}>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      
    </div>
  );
};

export default SideBar;
