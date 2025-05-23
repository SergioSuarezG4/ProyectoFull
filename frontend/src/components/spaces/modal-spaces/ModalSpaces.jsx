export default function ModalSpaces({isVisible, onClose, children}) {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center drop-shadow-lg">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
