import axios from "axios";

const baseURL = "http://localhost:4000";

const authHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: "Bearer " + token,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export const instance = axios.create({
  baseURL,
  headers: authHeader(),
});

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401 || response.status === 403) {
      if (response.config.url !== "/auth/login") {
        localStorage.removeItem("token");
        window.location.href = "/";
        return;
      }
    }
    return response;
  },
  (error) => {
    if (error.response && error.config.url !== "/auth/login") {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem("token");
        window.location.href = "/";
        return;
      }
    }

    return Promise.reject(error);
  }
);
