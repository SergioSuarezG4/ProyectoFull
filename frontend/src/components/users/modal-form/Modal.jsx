import { Formik } from "formik";
import { getInitialUserValues } from "../../../helpers/useModalFormHelper";
import useUpdateData from "../../../hooks/useUpdateData";
import { useContext } from "react";
import { AuthContext } from "../../../hooks/AuthProvider";
import { registerUser } from "../../../services/authService";

const Modal = ({ edit, isVisible, onClose, user }) => {
  const { token } = useContext(AuthContext);
  const { updateData } = useUpdateData();
  const initialValues = getInitialUserValues(edit, user);

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      if (edit) {
        console.log("Datos a actualizar:", values, token);
        await updateData({data: values, endpoint: "users", tokenUser: token});
        alert("Usuario actualizado correctamente");
      } else {
        await registerUser(values);
        alert("Usuario creado correctamente");
      }

      onClose();
      resetForm();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 backdrop-blur-sm 
            flex justify-center items-center drop-shadow-lg"
        >
          <div className="w-[500px] flex flex-col">
            <button
              className="text-black text-xl place-self-end"
              onClick={onClose}
            >
              X
            </button>
            <div className="container-modal-name bg-white text-black text-4xl text-center font-semibold p-3 ">
              {edit ? `Editar: ${user?.nombre}` : "Crear Usuario"}
            </div>
            <div className="grid grid-cols-6">
              <div className=" flex justify-center container-modal-info bg-white col-span-6 text-black">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleFormSubmit}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    setFieldValue,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="p-8 bg-white w-full max-w-sm"
                    >
                      <div className="mb-2">
                        <label
                          htmlFor="nombre"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Nombre
                        </label>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          placeholder="Nombre"
                          className="block w-full bg-white text-gray-700 border rounded py-2 px-3"
                          value={values.nombre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="block w-full bg-white text-gray-700 border rounded py-2 px-3"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="******************"
                          className="block w-full bg-white text-gray-700 border rounded py-2 px-3"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="rol_id"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Rol
                        </label>
                        <select
                          id="rol_id"
                          name="rol_id"
                          className="block w-full bg-white text-gray-700 border rounded py-2 px-3"
                          value={values.rol_id}
                          onChange={(e) =>
                            setFieldValue("rol_id", Number(e.target.value))
                          }
                          onBlur={handleBlur}
                        >
                          <option value={1}>Admin</option>
                          <option value={2}>Cliente</option>
                          <option value={3}>Recepcionista</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                      >
                        {edit ? "Editar" : "Crear"}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
