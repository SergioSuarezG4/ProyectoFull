//Formato de fecha para envio al back
const formDate = (dateString) => {
  
  // Fecha seleccionada (solo año, mes, día)
  const selectedDate = new Date(dateString + "T00:00:00");

  // Hora actual local
  const now = new Date();

  selectedDate.setHours(now.getHours());
  selectedDate.setMinutes(now.getMinutes());
  selectedDate.setSeconds(now.getSeconds());
  selectedDate.setMilliseconds(0);

  const timezoneOffset = selectedDate.getTimezoneOffset() * 60000; // en ms

  // Creamos fecha ajustada
  const localDate = new Date(selectedDate.getTime() - timezoneOffset);

  const localISO = localDate.toISOString().slice(0, -1);

  return `${localISO}-05:00`;
};

//Formato de horas am y pm.
const formatoHora = (hora) => {
  const [h, m] = hora.split(":");
  const date = new Date();
  date.setHours(+h, +m);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

//Fecha del back a fecha normal.
const formatoFechaLarga = (fechaString) => {
  const fecha = new Date(fechaString);

  const opciones = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Usamos 'es-ES' para que devuelva en español
  return fecha.toLocaleDateString("es-ES", opciones);
};

export { formDate, formatoHora, formatoFechaLarga};