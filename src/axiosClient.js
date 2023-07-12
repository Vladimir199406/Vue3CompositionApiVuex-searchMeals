import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_MEALS_URL,
});

export default axiosClient;
