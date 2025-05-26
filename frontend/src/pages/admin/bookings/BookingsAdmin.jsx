import { useModal } from "../../../hooks/useModal";
import Modal from "../../../components/modal/Modal";
import FormBookings from "../../../components/bookings/form-bookings/FormBookings";
import { useContext, useState } from "react";
import TableItemBookings from "../../../components/bookings/table-bookings/TableItemBookings";
import useFetchData from "../../../hooks/useFetchData";
import useDeleteData from "../../../hooks/useDeleteData";
import { AuthContext } from "../../../hooks/AuthProvider";
const columns = [
    { label: "Usuario" },
    { label: "Email" },
    { label: "Espacio" },
    { label: "Fecha" },
    { label: "Horario" },
    { label: "Estado"},
    { label: "Accion"},
];

const BookingsAdmin = () => {
  
  const { openModal, showModal, closeModal } = useModal();
  const {deleteData} = useDeleteData()
  const { data: bookings, refetch} = useFetchData({ endpoint: "bookings" });
  const {token} = useContext(AuthContext)
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

  const handleDelete = async (booking) => {
    console.log(booking)
    if (!window.confirm(`¿Seguro quieres eliminar la numero: ${booking.ID}?`)) return;
    try {
      const response = await deleteData({data: booking, endpoint: "bookings", tokenUser: token});
      alert(response.message);
      refetch();
    } catch (err) {
      alert("Error al eliminar la reserva: " + err.message);
    }
  };
  const handleCloseModal = () => {
    closeModal();
    refetch();    
  };
  return (
    <div className="ml-[120px]">
      <div className="flex justify-between items-center p-6 mb-3">
        <p className="text-2xl font-bold">Bookings</p>
        <button onClick={handleCreateBooking} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Crear Reserva
        </button>
      </div>
      <div>
        <TableItemBookings columns={columns} items={bookings} onEdit={handleEditBooking} isCliente={false} onDelete={handleDelete}/>
      </div>
      <Modal isVisible={showModal} onClose={handleCloseModal}>
        <FormBookings
          isEdit={!!selectedBooking}
          booking={selectedBooking}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};
export default BookingsAdmin;
