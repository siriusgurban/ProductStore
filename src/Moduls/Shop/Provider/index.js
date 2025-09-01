import axios from "axios";
import { productEndpoint } from "../../../api/endpoints";

export const getProduct = async () => {
  return await axios.get(`${import.meta.env.VITE_API_URL}${productEndpoint}`)
}


