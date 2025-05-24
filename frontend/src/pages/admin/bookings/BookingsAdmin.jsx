import { useModal } from "../../../hooks/useModal";
import Modal from "../../../components/modal/Modal";
import FormBookings from "../../../components/bookings/form-bookings/FormBookings";
import { useState } from "react";
import TableItem from "../../../components/users/table-admin-users/TableItem";
import useFetchData from "../../../hooks/useFetchData";


const columns = [
    { label: "Usuario" },
    { label: "Espacio" },
    { label: "Fecha" },
    { label: "Estado" },
    { label: "Accion"},
];

const BookingsAdmin = () => {

  const { openModal, showModal, closeModal } = useModal();
    const { data: bookings } = useFetchData({ endpoint: "bookings" });

  
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleCreateBooking = () => {
    console.log(bookings)
    setSelectedBooking(null)
    openModal();
  }

  const handleEditBooking = (booking) => {
    setSelectedBooking(booking)
    openModal();
  }

  return (
    <div className="ml-[120px]">
      <div className="flex justify-between items-center p-6">
        <p className="text-2xl font-bold">Bookings</p>
        <button onClick={handleCreateBooking} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Crear Reserva
        </button>
      </div>
      <div>
        <TableItem columns={columns} items={bookings} onEdit={handleEditBooking}/>
      </div>
      <Modal isVisible={showModal} onClose={closeModal}>
        <FormBookings
          isEdit={!!selectedBooking}
          booking={selectedBooking}
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
};
export default BookingsAdmin;
