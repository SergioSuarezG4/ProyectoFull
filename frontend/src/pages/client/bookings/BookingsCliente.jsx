import TableItemBookings from "../../../components/bookings/table-bookings/TableItemBookings";
import useFetchData from "../../../hooks/useFetchData";
import Modal from "../../../components/modal/Modal";
import FormBookings from "../../../components/bookings/form-bookings/FormBookings";
import { useModal } from "../../../hooks/useModal";
import { useContext } from "react";
import { AuthContext } from "../../../hooks/AuthProvider";
import useDeleteData from "../../../hooks/useDeleteData";

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
    const {usuario, token} = useContext(AuthContext)
    const {deleteData} = useDeleteData()

    
    const filterBookings = bookings.filter((booking) => booking.user_id === usuario.id)

    const handleCreateBooking = () => {
        openModal();
    }

    const handleDelete = async (booking) => {
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
                {filterBookings.length > 0 ? (
                    <TableItemBookings columns={columns} items={filterBookings} isCliente={true} onDelete={handleDelete}/>
                ) : (
                    <p className="text-center text-gray-500 py-8">No hay reservas por mostrar.</p>
                )}
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
