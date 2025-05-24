import { Formik, Form, Field } from "formik";
import useCreateData from "../../../hooks/useCreateData";
import { AuthContext } from "../../../hooks/AuthProvider";
import { useContext } from "react";
import { getInitialBookingsValues } from "../../../helpers/useModalFormHelper";
import useUpdateData from "../../../hooks/useUpdateData";
import useFetchData from "../../../hooks/useFetchData";
import { formDate } from "../../../helpers/formDate";

const FormBookings = ({ isEdit = false, booking, onClose }) => {
  const { createData } = useCreateData();
  const { updateData } = useUpdateData();
  const { token, usuario } = useContext(AuthContext);
  const { data: spaces } = useFetchData({ endpoint: "spaces" });
  const { data: users } = useFetchData({ endpoint: "users" });

  const initialValues = getInitialBookingsValues(isEdit, booking, usuario);

  const handleFormSubmit = async (values, { resetForm }) => {
    const payload = {
      ...values,
      user_id: Number(values.user_id),
      space_id: Number(values.space_id),
      fecha: formDate(values.fecha),
    };
    
    console.log("Spaces: ", payload);
    try {
      if (isEdit) {
        await updateData({data: payload, endpoint: "bookings", tokenUser: token});
        alert("Reserva actualizada correctamente")
      } else {
        await createData({data: payload,endpoint: "bookings", tokenUser: token});
        alert("Reserva agregada correctamente")

      }
      resetForm();
      onClose();
    } catch (error) {
      console.log("Error al enviar los datos.", error.message);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        <Form className="max-w-sm mx-auto bg-white p-6">
          <div className="">
            <h2 className="text-xl font-bold mb-4 text-center">
              {isEdit ? "Editar Reserva" : "Crear Reserva"}
            </h2>
            <label className="text-sm font-medium">Usuario</label>
            <Field type="hidden" name="id" />
            <Field
              name="user_id"
              as="select"
              className="w-full border rounded-md p-2 text-sm"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.nombre}
                </option>
              ))}
            </Field>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Espacio</label>
            <Field
              name="space_id"
              as="select"
              className="w-full border rounded-md p-2 text-sm"
            >
              {spaces.map((space) => (
                <option key={space.ID} value={space.ID}>
                  {space.nombre}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <label className="text-sm font-medium">Fecha</label>
            <Field
              type="date"
              name="fecha"
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2 space-y-1">
              <label className="text-sm font-medium">Hora inicio</label>
              <Field
                type="time"
                name="hora_inicio"
                className="w-full border rounded-md p-2 text-sm"
              />
            </div>
            <div className="w-1/2 space-y-1">
              <label className="text-sm font-medium">Hora fin</label>
              <Field
                type="time"
                name="hora_fin"
                className="w-full border rounded-md p-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Estado</label>
            <Field
              name="estado"
              as="select"
              className="w-full border rounded-md p-2 text-sm"
            >
              <option value="Confirmado">Confirmado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Cancelado.">Cancelado</option>
            </Field>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-gray-600 hover:bg-gray-700 rounded-md"
            >
              Crear
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default FormBookings;
