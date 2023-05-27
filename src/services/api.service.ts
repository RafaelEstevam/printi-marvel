import axios from "axios";
import { getAccess } from "../helpers/getAccess.helper";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import { config } from "process";

let snack: any;

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

    snack = enqueueSnackbar("Loading", { variant: "info" });
    return config;
  },
  (error) => {
    // snack = enqueueSnackbar("Cannot loading information", {
    //   variant: "error",
    //   autoHideDuration: 3000,
    // });
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (config) => {
    closeSnackbar(snack);
    return config;
  },
  (error) => {
    snack = enqueueSnackbar(
      "Cannot loading information. Try to refresh your access data on login.",
      {
        variant: "error",
        autoHideDuration: 5000,
      }
    );
    return Promise.reject(error);
  }
);

export { API };
