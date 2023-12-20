import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";
import { HOST_API } from "../constant/host";

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
  // withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const data = error?.response?.data;
    if (data) toast.error(data.message);
    throw error;
  }
);
export default axiosClient;
