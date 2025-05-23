import CardSpaces from "../../../components/spaces/card-spaces/CardSpaces";
import FormSpaces from "../../../components/spaces/form-spaces/FormSpaces";
import ModalSpaces from "../../../components/spaces/modal-spaces/ModalSpaces";
import useFetchData from "../../../hooks/useFetchData";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";

export default function SpacesAdmin() {
  const { openModal, showModal, closeModal } = useModal();

  const { data } = useFetchData({ endpoint: "spaces" });

  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleCreate = () => {
    setSelectedSpace(null);
    openModal();
  };

  const handleEdit = (space) => {
    setSelectedSpace(space);
    openModal();
  };
  return (
    <div className="ml-[240px] p-6 min-h-screen bg-gray-50">
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
        {data && data.length > 0 ? (
          data.map((space, index) => (
            <CardSpaces 
            key={space.id || index}
            space={space}
            onEdit={() => handleEdit(space)} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No hay espacios disponibles.
          </p>
        )}
        <ModalSpaces isVisible={showModal} onClose={closeModal}>
          <FormSpaces isEdit={!!selectedSpace} space={selectedSpace} onClose={closeModal} />
        </ModalSpaces>
      </div>
    </div>
  );
}
