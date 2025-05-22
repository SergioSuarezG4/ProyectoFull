import { useEffect, useState, useContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const useUpdateData = () => {
  const [datos, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateData = async ({ data, endpoint, tokenUser }) => {
    try {
      const response = await axios.put(
        `${API_URL}${endpoint}/${data.id}`,
        data,
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
      console.error("Error al actualizar los datos:", err.message);
      setError(err);
      throw err;
    }
  };

  return { updateData, datos, error };
};
export default useUpdateData;

