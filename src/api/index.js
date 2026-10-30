import { setAuthStatus } from "@/store/slices/authSlice";
import { BASE_URL } from "@/config/env";
import store from "@/store/store";
import axios from "axios";

const http = axios.create({
  //TODO will change when api will be
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const { dispatch } = store;

// //TODO will change when api will be
http.interceptors.request.use(
  (config) => {
    const {
      auth: { user_token },
      language: { language },
    } = store.getState();
    if (user_token) {
      config.headers.Authorization = `Bearer ${user_token}`;
    }
    if (language) {
      config.headers["Accept-Language"] = language;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (response?.status === 401) {
      dispatch(setAuthStatus(false));
    }
    return Promise.reject({
      status: response?.status,
      message: response?.data?.message,
    });
  }
);

export default http;
