import {
  FiUser,
  FiUserPlus,
  FiHome,
  FiUsers,
  FiClipboard,
  FiUserCheck,
  FiCalendar,
} from "react-icons/fi";
import { GoCodespaces } from "react-icons/go";
import { FaAddressBook } from "react-icons/fa";

export const rolMap = {
  1: "admin",
  2: "cliente",
  3: "recepcionista",
};


//Items del menu del sidebar segun el rol que tenga el usuario...
export const menuItems = {
  guest: [
    { name: "Home", path: "/", icon: FiHome },
    { name: "Iniciar Sesion", path: "/login", icon: FiUser },
    { name: "Registrarse", path: "/register", icon: FiUserPlus },
  ],
  admin: [
    { name: "Dashboard", path: "/admin/dashboard", icon: FiHome },
    { name: "Usuarios", path: "/admin/users", icon: FiUsers },
    { name: "Espacios", path: "/admin/spaces", icon: GoCodespaces },
    { name: "Reservas", path: "/admin/bookings", icon:FaAddressBook  }
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
