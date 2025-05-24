import { useState } from "react";
import { Formik } from "formik";
import { registerUser } from "../../services/authService";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // <-- Inicializas navigate

  const handleFormSubmit = async (values, { resetForm }) => {
    setErrorMessage("");

    try {
      const data = await registerUser(values);
      alert("Usuario registrado correctamente",data);
      resetForm();
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message || "Error al registrar usuario");
    }
  };

  return (
    <Formik
      initialValues={{ nombre: "", email: "", password: "", rol_id: 1 }}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, handleBlur, values, setFieldValue }) => (
        <div className="flex justify-center items-center min-h-screen bg-gray-300">
          <div className="p-6 rounded-lg shadow-lg bg-gray-200 w-110 mt-5 mb-5">
            {errorMessage && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}
            <h1 className="text-black p-5 mb-9 text-4xl font-bold text-center">
              Registrar Usuario
            </h1>
            <div className="flex justify-center">
              <FiUserPlus size={100}/>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
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
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
                <label htmlFor="rol_id" className="block text-gray-700 text-sm font-bold mb-2">
                  Rol
                </label>
                <select
                  id="rol_id"
                  name="rol_id"
                  className="block w-full bg-white text-gray-700 border rounded py-2 px-3"
                  value={values.rol_id}
                  onChange={(e) => setFieldValue("rol_id", Number(e.target.value))}
                  onBlur={handleBlur}
                >
                  <option value={1}>Admin</option>
                  <option value={2}>Cliente</option>
                  <option value={3}>Recepcionista</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
