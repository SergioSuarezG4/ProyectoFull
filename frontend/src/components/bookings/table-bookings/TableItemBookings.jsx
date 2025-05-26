import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";
import { formatoHora, formatoFechaLarga } from "../../../helpers/formDate";

const TableItemBookings = ({ columns, items, onEdit, isCliente }) => {
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-50 text-sm text-gray-700">
          <tr>
            {columns.map((col) => (
              <th key={col.id || col.label} className="px-6 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id || index} className="border-b">
              <td className="px-6 py-4 font-medium text-gray-900">
                {item.user?.nombre}
              </td>
              <td className="px-6 py-4">{item.user?.email}</td>
              <td className="px-6 py-4">
                {item.space?.nombre}
              </td>
              <td className="px-6 py-4">
                {formatoFechaLarga(item.fecha)}
              </td>
              <td className="px-6 py-4">
                {formatoHora(item.hora_inicio)} - {formatoHora(item.hora_fin)}
              </td>
              <td className="px-6 py-4">
                {item.estado}
              </td>
              {isCliente ? (
                <td className="gap-8 flex justify-items-start px-12 py-4">
                  <button ><TiUserDeleteOutline size={26}/>Cancelar</button>
                </td>
              ) : (
              <td className="gap-8 flex justify-items-start px-6 py-4">
                <button className="cursor-pointer" onClick={() => onEdit(item)}><FaUserEdit size={23}/></button>
                <button ><TiUserDeleteOutline size={26}/></button>
              </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItemBookings;
