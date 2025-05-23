import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:8080/api/";

const useCreateData = () => {
    
    const [datos, setData] = useState([])
    const [error, setError] = useState(null)

    const createData = async ({data, endpoint, tokenUser}) => {
        try {
            const response = await axios.post(`${API_URL}${endpoint}/`, data,
             {
                headers : {
                    Authorization : `Bearer ${tokenUser}`
                },
            }
        );
        setData(response.data)
        setError(null)
        return response.data;
        } catch (error) {
            console.log("Error al crear el recurso:", error.message)
            setError(error);
        }
        
    };

    return {createData, datos, error};
};

export default useCreateData;