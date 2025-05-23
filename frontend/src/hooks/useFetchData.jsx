import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../hooks/AuthProvider";

const useFetchData = ({ endpoint }) => {
  const API_URL = "http://localhost:8080/api";
  const { token } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${endpoint}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error("Error al obtener los datos:", err.message);
        setError(err);
        setData([]);
      }
    };

    fetchData();
  }, [endpoint, token]);

  return { data, error };
};

export default useFetchData;
