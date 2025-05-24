import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

const CardSpaces = ({ space, onEdit }) => {
  return (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden border flex flex-col justify-between min-h-[400px] hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mt-4">
        <CiImageOn  size={200} />
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            {space.nombre}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{space.descripcion}</p>
          <div className="text-sm text-gray-700">
            <p>
              <strong>Capacidad:</strong> {space.capacidad} Personas
            </p>
            <p>
              <strong>Precio/hora:</strong> ${space.precio_por_hora}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={onEdit}
            className="bg-gray-400 p-3 cursor-pointer rounded-lg hover:bg-gray-300"
          >
            <FiEdit size={20} />
          </button>
          <button className="bg-red-400 p-3 cursor-pointer rounded-lg hover:bg-red-300">
            <MdDeleteOutline size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSpaces;
