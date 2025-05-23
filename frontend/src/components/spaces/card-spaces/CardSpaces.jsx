import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

const CardSpaces = ({ space, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border flex flex-col justify-between min-h-[400px]">
      <div className="flex justify-center mt-4">
        <CiImageOn  size={200} />
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {space.nombre}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{space.descripcion}</p>
          <div className="text-sm text-gray-700">
            <p>
              <strong>Capacidad:</strong> {space.capacidad}
            </p>
            <p>
              <strong>Precio/hora:</strong> ${space.precio_por_hora}
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <button
            onClick={onEdit}
            className="bg-gray-500 px-4 py-2 cursor-pointer rounded hover:bg-gray-600"
          >
            <FiEdit size={20} />
          </button>
          <button className="bg-red-400 px-4 py-2 cursor-pointer rounded hover:bg-red-500">
            <MdDeleteOutline size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSpaces;
