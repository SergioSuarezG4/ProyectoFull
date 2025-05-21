import React, { useState } from "react";
import axios from "axios";

const CreateSpace = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/spaces/",
        { name, description },
        {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWNob0BnbWFpbC5jb20iLCJleHAiOjE3NDc5MzEyMjgsInVzZXJfaWQiOjY1fQ.t084uJYd9DboHlQ9yjgZ3M3aoYaUd6fRXjLy1Lyvdh0'
          },
        }
      )
      .then((res) => {
        setMessage("Espacio creado con éxito.");
        setName("");
        setDescription("");
      })
      .catch((err) => {
        setMessage("Error al crear espacio.");
        console.error(err);
      });
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Espacio</h2>
      {message && (
        <div className="mb-4 text-sm text-center text-green-600">{message}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nombre del espacio</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Descripción</label>
          <textarea
            className="w-full border rounded-md p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Crear Espacio
        </button>
      </form>
    </div>
  );
};

export default CreateSpace;
