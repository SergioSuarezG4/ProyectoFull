import { useEffect, useState } from "react";
import CardHome from "../../components/CardHome";
import TableItem from "../../components/TableItem";
import useFetchData from "../../hooks/useFetchData";


const UsuarioAdmin = () => {
    const {data} = useFetchData({endpoint:'users/'})
    
    const columns = [
    { label: "Nombre" },
    { label: "Email" },
    { label: "Rol id" },
    { label: "Acción" }
];

  return (
    <>
      <div className="flex flex-col justify-end ms-25 mt-5">
        <p className="text-4xl font-medium">Users</p>
      </div>
      <div>
        <CardHome />
      </div>
      <div>
        <TableItem columns={columns} items={data} />
      </div>
    </>
  );
};

export default UsuarioAdmin;
