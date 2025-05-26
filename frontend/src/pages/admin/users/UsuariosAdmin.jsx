import CardHome from "../../../components/home/card-home/CardHome";
import TableItem from "../../../components/users/table-admin-users/TableItem";
import useFetchData from "../../../hooks/useFetchData";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../../components/users/modal-form/Modal";
import { getAddUserCard, userTypeCards } from "./userConfig/UsuariosConfig";
import { useContext, useState } from "react";
import { AuthContext } from "../../../hooks/AuthProvider";
import useDeleteData from "../../../hooks/useDeleteData";

const columns = [
    { label: "Nombre" },
    { label: "Email" },
    { label: "Tipo" },
    { label: "Acción" },
];

const UsuarioAdmin = () => {

  const { data: users, error, refetch } = useFetchData({ endpoint: "users" }); 
  const  {deleteData} = useDeleteData();
  const { openModal, showModal, closeModal } = useModal();
  const {usuario, token} = useContext(AuthContext)
  
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSeletedUser] = useState(null)

  const handleCreateUser = () => {
    setSeletedUser(null)
    setIsEdit(false)
    openModal();
  };

  const handleEditUser = (user) => {
    setSeletedUser(user)
    console.log(user.id)
    setIsEdit(true)
    openModal();
  };

  const handleDeleteUser = async (user) => {
    console.log(token)
    if (!window.confirm(`¿Seguro quieres eliminar a ${user.nombre}?`)) return;
    try {
      const response = await deleteData({data: user, endpoint: "users", tokenUser: token});
      alert(response.message);
      refetch();
    } catch (err) {
      alert("Error al eliminar el usuario: " + err.message);
    }
  };
  
  const handleCloseModal = () => {
    closeModal()
    refetch()
  }

  const Users = {
    spaces: [getAddUserCard(handleCreateUser), ...userTypeCards],
  };
  return (
    <>
      {error ? (
        <div
          className="flex justify-center items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          <span className="font-medium">
            Ocurrió un error al cargar los datos: {error.message}
          </span>
        </div>
      ) : (
        <>
          <div className="ml-[120px] p-6">
            <p className="text-2xl font-bold ">Bievenido {usuario.nombre}!</p>
          </div>
          <div>
            <CardHome menuItems={Users} color="gray" />
          </div>
          <div className="h-auto flex flex-col justify-end px-6 mt-8 ml-20">
            <TableItem columns={columns} items={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
          </div>
        </>
      )}
      <Modal
        edit={isEdit}
        isVisible={showModal}
        onClose={handleCloseModal}
        user={selectedUser}
      />
    </>
  );
};

export default UsuarioAdmin;
