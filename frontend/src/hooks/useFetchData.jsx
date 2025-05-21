import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = ({ endpoint }) => {
  const API_URL = "http://localhost:8080/api";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWNob0BnbWFpbC5jb20iLCJleHAiOjE3NDc5NDg5NDMsInVzZXJfaWQiOjY1fQ.fvQrlYwNaao5rtp6u6aFXd2Pkh8QtbB8YrbhDxuWMTU";

  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // (opcional) para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        console.error("Error al obtener los datos:", err.message);
        setError(err);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error };
};

export default useFetchData;
