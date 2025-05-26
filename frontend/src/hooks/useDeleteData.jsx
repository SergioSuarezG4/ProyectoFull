import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const useDeleteData = () => {
  const [datos, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteData = async ({ data, endpoint, tokenUser }) => {
    try {
      const response = await axios.delete(
        `${API_URL}${endpoint}/${data.id || data.ID}`,
        {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );
      setData(response.data);
      setError(null);
      return response.data;
    } catch (err) {
      console.error("Error al eliminar los datos:", err.message);
      setError(err);
      throw err;
    }
  };

  return { deleteData, datos, error };
};
export default useDeleteData;

