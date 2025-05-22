import { IoPersonAddOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { RiUserSettingsLine } from "react-icons/ri";

//Card que llama al modal para agregar un nuevo usuario.
export const getAddUserCard = (openModal) => ({
  name: "Agregar Usuario",
  descripcion: "Registra un nuevo usuario en el sistema.",
  icon: () => (
    <IoPersonAddOutline
      size={65}
      color="gray"
      className="text-2xl cursor-pointer hover:text-blue-500"
      onClick={() => openModal()}
    />
  ),
});

//Tipos de usuarios cards.
export const userTypeCards = [
  {
    name: "Administrador",
    descripcion: "Gestión completa del sistema, usuarios y configuraciones.",
    icon: RiAdminLine,
  },
  {
    name: "Cliente",
    descripcion: "Accede a los servicios y reservas disponibles.",
    icon: CiUser,
  },
  {
    name: "Recepcionista",
    descripcion: "Gestiona reservas, atención al cliente y control de acceso.",
    icon: RiUserSettingsLine,
  },
];
