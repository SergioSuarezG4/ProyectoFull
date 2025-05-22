import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useContext } from "react"
import { AuthContext } from "../../hooks/AuthProvider"
import { NavLink } from "react-router-dom";
import { rolMap, menuItems} from "../sideBar/MenuSideBar";

const SideBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { usuario } = useContext(AuthContext);

  const rol = rolMap[usuario?.rol_id] || "guest";
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
