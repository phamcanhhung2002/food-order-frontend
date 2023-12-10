import axios, { AxiosError } from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";
import { HOST_API } from "../constant/host";
import { store } from "../state/store";

const axiosClient = axios.create({
  baseURL: HOST_API,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => {
      return queryString.stringify(params, {
        skipEmptyString: true,
        skipNull: true,
      });
    },
  },
});

axiosClient.interceptors.request.use(async (config) => {
  let token = store.getState()?.userInfo?.token;

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  config.timeout = 15000;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error: AxiosError) => {
    toast.error(error.message);
    throw error;
  },
);
export default axiosClient;

