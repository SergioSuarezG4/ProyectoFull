import CardSpaces from "../../../components/spaces/card-spaces/CardSpaces";
import FormSpaces from "../../../components/spaces/form-spaces/FormSpaces";
import Modal from "../../../components/modal/Modal";
import useFetchData from "../../../hooks/useFetchData";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";

export default function SpacesAdmin() {
  const { openModal, showModal, closeModal } = useModal();

  const { data: spaces, refetch } = useFetchData({ endpoint: "spaces" });

  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleCreate = () => {
    setSelectedSpace(null);
    openModal();
  };

  const handleEdit = (space) => {
    setSelectedSpace(space);
    openModal();
  };

  const handleCloseModal = () => {
    closeModal()
    refetch()
  }
  return (
    <div className="ml-[240px] p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Administrar Espacios</h1>
        <button
          onClick={handleCreate}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Crear Espacio
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {spaces && spaces.length > 0 ? (
          spaces.map((space) => (
            <CardSpaces 
            key={space.ID}
            space={space}
            onEdit={() => handleEdit(space)} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No hay espacios disponibles.
          </p>
        )}
        <Modal isVisible={showModal} onClose={handleCloseModal}>
          <FormSpaces isEdit={!!selectedSpace} space={selectedSpace} onClose={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
}
