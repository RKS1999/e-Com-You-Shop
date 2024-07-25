// axiosInstance.js
import axios from "axios";
import { baseUrl, loginURL } from "./EndPoints";

// Axios instance for product-related requests
export const productAxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios instance for user-related requests
export const userAxiosInstance = axios.create({
  baseURL: loginURL,
  headers: {
    "Content-Type": "application/json",
  },
});
