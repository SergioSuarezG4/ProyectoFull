//Inicial values de los usuarios.
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
//Inicial values de los espacios.
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

export const getInitialBookingsValues = (edit, booking = {}, usuario) => {
  if (edit) {
    return {
      id: booking?.ID || "",
      user_id: booking?.user_id || "",
      space_id: booking?.space_id || "",
      fecha: booking?.fecha?.split("T")[0] || "", // formato YYYY-MM-DD
      hora_inicio: booking?.hora_inicio || "",
      hora_fin: booking?.hora_fin || "",
      estado: booking?.estado || "Pendiente",
    };
  }

  return {
    user_id: usuario?.id,
    space_id: 1,
    fecha: "",
    hora_inicio: "",
    hora_fin: "",
    estado: "Pendiente",
  };
};
