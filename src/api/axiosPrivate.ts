import axios from "axios";
import queryString from "query-string";
import { HOST_API } from "../constant/host";
import { store } from "../state/store";
import { toast } from "react-toastify";
import { appApi } from "./appApi";
import { setAccessToken } from "../state/user/userSlide";

const axiosPrivate = axios.create({
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

axiosPrivate.interceptors.request.use(async (config) => {
  const accessToken = store.getState()?.user.accessToken;

  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }
  config.timeout = 15000;
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    const status = error?.response?.status;
    if (status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const { data } = await appApi.getRefreshToken();
      const accessToken = data.accessToken;
      prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      store.dispatch(setAccessToken(accessToken));
      console.log("refresh");
      return axiosPrivate(prevRequest);
    }

    const data = error?.response?.data;

    if (data) toast.error(data.message);
    throw error;
  }
);
export default axiosPrivate;
