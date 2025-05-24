import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";

const TableItem = ({ columns, items, onEdit }) => {
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
                {item.nombre || item.user_id}
              </td>
              <td className="px-6 py-4">{item.email || item.space_id}</td>
              <td className="px-6 py-4">
                {item.role?.nombre || item.fecha}
              </td>
              <td className="gap-8 flex justify-items-start px-6 py-4">
                <button className="cursor-pointer" onClick={() => onEdit(item)}><FaUserEdit size={23}/></button>
                <button ><TiUserDeleteOutline size={26}/></button>
              </td>
              <td className="px-6 py-4">
                {item.estado}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
