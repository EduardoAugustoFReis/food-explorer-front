import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-upu0.onrender.com"
});

