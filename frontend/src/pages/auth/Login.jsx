import { Formik } from "formik";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import { FiUser} from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // <-- Inicializas navigate

  const handleFormSubmit = async (values, { resetForm }) => {
    if (values.email === "" || values.password === "") {
      setErrorMessage("Por favor, complete todos los campos.");
      return;
    }
    setErrorMessage("");
    try {
      const data = await loginUser(values);
      alert("Usuario autenticado correctamente.", data);

      login(data.user, data.token);
      resetForm();

      
      navigate("/")
    } catch (error) {

      setErrorMessage(error.message || "Error al loguear usuario");
      resetForm();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-lg shadow-lg bg-white w-full max-w-sm"
          >
            {errorMessage && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}
            <h1 className="text-black-800 text-4xl font-bold mb-6 text-center">
              Iniciar Sesión
              <div className="flex justify-center mt-5">
                <FiUser size={100} />
              </div>

            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:gray-blue-400"
                id="email"
                name="email"
                type="email"
                placeholder="Digite su correo"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
            >
              Entrar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
