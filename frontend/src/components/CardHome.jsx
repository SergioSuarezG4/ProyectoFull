import { MdChair, MdCoPresent  } from "react-icons/md";
import { GiDesk } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";


const CardHome = () => {
  const menuItems = {
    spaces: [
      {name: "Oficina", descripcion: "Espacio privado para trabajar cómodamente sin interrupciones.", icon: MdChair},
      {name: "Escritorio Libre", descripcion: "Zona de trabajo compartida con ambiente colaborativo.", icon: GiDesk},
      {name: "Sala de Reuniones", descripcion: "Ideal para reuniones de equipo o presentaciones a clientes.", icon: SiGoogleclassroom },
      {name: "Oficina Ejecutiva", descripcion: "Ambiente premium para directivos y sesiones privadas.", icon: MdCoPresent,},
    ],
  };

  return (
    <div className="flex flex-wrap justify-center">
      {menuItems.spaces.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center text-center h-60 w-64 bg-gray-50 rounded-2xl shadow-lg m-4 p-6"
        >
          <div className="mb-4">
            <item.icon size={60} className="text-black-700" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">{item.name}</h1>
          <p className="text-gray-600 text-sm">{item.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default CardHome;
