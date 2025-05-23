import CardHome from "../../components/card-home/CardHome";
import TableItem from "../../components/table-admin/TableItem";
import useFetchData from "../../hooks/useFetchData";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/modal-form/Modal";
import { getAddUserCard, userTypeCards } from "./userConfig/UsuariosConfig";

const columns = [
    { label: "Nombre" },
    { label: "Email" },
    { label: "Tipo" },
    { label: "Acción" },
];

const UsuarioAdmin = () => {
  const { data, error } = useFetchData({ endpoint: "users" });
  const { openModal, showModal, closeModal } = useModal();
  
  const Users = {
    spaces: [getAddUserCard(openModal), ...userTypeCards],
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
          <div className="flex justify-start mt-5 px-6 ml-20">
            <p className="text-4xl font-medium pe-9">Users</p>
            <button className="cursor-pointer"></button>
          </div>
          <div>
            <CardHome menuItems={Users} color="gray" />
          </div>
          <div className="h-auto flex flex-col justify-end px-6 mt-8 ml-20">
            <TableItem columns={columns} items={data} />
          </div>
        </>
      )}
      <Modal
        edit={false}
        isVisible={showModal}
        onClose={closeModal}
        user={null}
      />
    </>
  );
};

export default UsuarioAdmin;
