import Modal from "../modal-form/Modal";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";


const TableItem = ({ columns, items }) => {
  const { openModal, showModal, closeModal } = useModal();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    openModal();
  };


  
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
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-6 py-4 font-medium text-gray-900">
                {item.nombre}
              </td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">
                {item.role.nombre}
              </td>
              <td className="gap-8 flex justify-items-start px-6 py-4">
                <button className="cursor-pointer" onClick={() => handleOpenModal(item)}><FaUserEdit size={23}/></button>
                <button ><TiUserDeleteOutline size={26}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && selectedUser && (
        <Modal
          edit={true}
          isVisible={showModal}
          onClose={closeModal}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default TableItem;
