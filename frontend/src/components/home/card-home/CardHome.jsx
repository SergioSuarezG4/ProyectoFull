
const CardHome = ({menuItems, color}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {menuItems.spaces.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center text-center h-60 w-64 bg-gray-50 rounded-2xl shadow-lg m-4 p-6"
        >
          <div className="mb-4">
            <item.icon size={60} color = {color} className="text-black-700" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">{item.name}</h1>
          <p className="text-gray-600 text-sm">{item.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default CardHome;
