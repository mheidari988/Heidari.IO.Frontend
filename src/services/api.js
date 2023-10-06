import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (endpoint, data, config = {}) => {
  try {
    const mergedConfig = {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
      },
    };
    const response = await api.post(endpoint, data, mergedConfig);
    return response.data;
  } catch (error) {
    console.error(
      "Error during postData:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
