import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Usar la variable de entorno
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Recuperar el token desde localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Añadir el token al encabezado
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la respuesta:", error);
    return Promise.reject(error);
  }
);
export default apiInstance;
