const TableItem = ({ columns, items }) => {
    const roles = {
  1: "Cliente",
  2: "Administrador",
  3: "Recepcionista",
};

  return (
    <div className="h-auto flex flex-col justify-end px-6 mt-8 ms-20">
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
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-6 py-4 font-medium text-gray-900">{item.nombre}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{roles[item.rol_id] || "Desconocido"}</td>
              <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">
                Ver más.
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
