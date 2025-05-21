// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4 m-0 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex-1 flex justify-center space-x-4">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Usuarios
          </Link>
          <Link
            to="/spaces"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Espacios
          </Link>
          <Link
            to="/bookings"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Reservas
          </Link>
          <Link
            to="/payments"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Pagos
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/register"
            className="text-white text-2xl hover:text-gray-200"
          >
            <FiUserPlus />
          </Link>
          <Link
            to="/login"
            className="text-white text-2xl hover:text-gray-200"
          >
            <FiLogIn />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
