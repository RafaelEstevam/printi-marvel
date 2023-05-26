import axios from "axios";
import { getAccess } from "../helpers/getAccess.helper";

const API = axios.create({
  baseURL: `https://gateway.marvel.com`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const access = getAccess();
    config.params = {
      apikey: access.publicKey,
      ts: "1",
      hash: access.hash,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { API };
