import axios, { AxiosError, HttpStatusCode } from "axios";
import { toast } from "react-toastify";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL:
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_SERVER_URL
          : process.env.NEXT_PUBLIC_PROD_SERVER_URL,
      timeout: 10000,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data = error.response?.data;
          const message = data.message || error.message;
          toast.error(message);
        }
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;
export default http;
