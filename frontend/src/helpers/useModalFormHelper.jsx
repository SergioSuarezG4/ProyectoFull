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

export const getInitialSpacesValues = (edit, space = {}) => {
  if (edit) {
    return {
      id: space?.ID,
      nombre: space?.nombre || "",
      descripcion: space?.descripcion || "",
      capacidad: space?.capacidad || "",
      precio_por_hora: space?.precio_por_hora || 1,
    };
  }

  return {
    nombre: "",
    descripcion: "",
    capacidad: "",
    precio_por_hora: "",
  };
};