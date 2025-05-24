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
import { HiLogout } from "react-icons/hi";

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
    { name: "Usuarios", path: "/admin/users", icon: FiUsers },
    { name: "Espacios", path: "/admin/spaces", icon: GoCodespaces },
    { name: "Reservas", path: "/admin/bookings", icon:FaAddressBook  },
    { name: "Cerrar Sesion", path: "/logout", icon: HiLogout  },
  ],
  cliente: [
    { name: "Mis Reservas", path: "/cliente/reservas", icon: FiCalendar },
    { name: "Mi Perfil", path: "/cliente/perfil", icon: FiUsers },
    { name: "Cerrar Sesion", path: "/logout", icon: HiLogout  },
  ],
};
