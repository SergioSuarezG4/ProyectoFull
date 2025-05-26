import TableItemBookings from "../../../components/bookings/table-bookings/TableItemBookings";
import useFetchData from "../../../hooks/useFetchData";
import Modal from "../../../components/modal/Modal";
import FormBookings from "../../../components/bookings/form-bookings/FormBookings";
import { useModal } from "../../../hooks/useModal";
import { useContext } from "react";
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

const BookingsClient = () => {
    
    const { openModal, showModal, closeModal } = useModal();
    const { data: bookings, refetch } = useFetchData({ endpoint: "bookings" });
    const {usuario} = useContext(AuthContext)

    
    const filterBookings = bookings.filter((booking) => booking.user_id === usuario.id)

    const handleCreateBooking = () => {
        openModal();
    }

    const handleCloseModal = () => {
        closeModal()
        refetch()
    }
    return(
        <div className="ml-[200px]">
            <div className="flex justify-between items-center p-6 mb-3">
                <p className="text-2xl font-bold">Reservas de cliente</p>
                <button onClick={handleCreateBooking} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Agregar Reserva.
                </button>
            </div>
            <div>
                <TableItemBookings columns={columns} items={filterBookings} isCliente={true}/>
            </div>
            <Modal isVisible={showModal} onClose={handleCloseModal}>
                <FormBookings
                onClose={handleCloseModal}
                isCliente={true}
                ></FormBookings>
            </Modal>
            
        </div>
    )
}
export default BookingsClient; 
