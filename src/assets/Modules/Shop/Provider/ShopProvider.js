import axios from "axios";
import $api from "../../../../api/api";

export const getProducts = async()=>{
    return await axios.get(import.meta.env.VITE_API_URL + "/products");
};