import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // your API base URL from .env
  timeout: 10000,
  timeoutErrorMessage: "Request Timeout",
});

// Attach token automatically if present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptors for handling responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      throw error.response;
    } else if (error.request) {
      // Request was made but no response received
      throw new Error("Network error: No response received from server");
    } else {
      // Something happened in setting up the request
      throw new Error(`Error: ${error.message}`);
    }
  }
);

export { axiosInstance };
