import axios, { AxiosInstance, AxiosResponse } from "axios";
import router from "next/router";
import * as storage from "@/app/util/persistent-storage";

const BASE_DOMAIN_API = "https://admin.page365s.net/api";

const baseURL = BASE_DOMAIN_API; // Thay đổi domain theo yêu cầu của bạn

class Axios {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: baseURL,
    });
    this.instance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          // Logout
        } else {
          return Promise.reject(error);
        }
      },
    );
  }

  get(path: string, data?: object): Promise<AxiosResponse> {
    return this.instance.get(path, { params: data });
  }

  post(path: string, data?: object): Promise<AxiosResponse> {
    return this.instance.post(path, data);
  }

  put(path: string, data?: object): Promise<AxiosResponse> {
    return this.instance.put(path, data);
  }

  delete(path: string, data?: object): Promise<AxiosResponse> {
    return this.instance.delete(path, { data: data });
  }

  setAuthorizationToken(token: string) {
    this.instance.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
}

export default new Axios();
