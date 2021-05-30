import axios, { AxiosInstance } from "axios";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const client = (): AxiosInstance => {
  const axiosApiInstance = axios.create({ baseURL: apiBaseUrl });

  // Request interceptor for API calls
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      config.headers = {
        "X-Authorization": process.env.REACT_APP_API_KEY,
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return axiosApiInstance;
};

export default client;
