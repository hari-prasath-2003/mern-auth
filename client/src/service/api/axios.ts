import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

export default axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
