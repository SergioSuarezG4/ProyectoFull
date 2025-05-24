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

export default formDate;
