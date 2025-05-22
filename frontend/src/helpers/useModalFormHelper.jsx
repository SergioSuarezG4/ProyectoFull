export const getInitialUserValues = (edit, user = {}) => {
  if (edit) {
    return {
      id: user?.id || "",
      nombre: user?.nombre || "",
      email: user?.email || "",
      password: "",
      rol_id: user?.rol_id || 1,
    };
  }

  return {
    nombre: "",
    email: "",
    password: "",
    rol_id: 1,
  };
};
