import axios, { type AxiosInstance } from "axios";
export default class UYUXGateway {
  // private APIKey = 1;
  private request: AxiosInstance;
  constructor() {
    this.request = axios.create({
      baseURL: "https://apiuxuy.xws.cn",
    });
    this.request.interceptors.response.use(
      (response: any) => {
        return Promise.resolve(response);
      },
      (error: any) => {
        // console.log("error.response", error.response);

        return Promise.reject(error);
      }
    );
  }

  // post 请求
  async post<T = any>(uri: string, params: Record<string, any> = {}) {
    const { data } = await this.request.post(uri, params, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "x-language": localStorage.getItem("lang")
          ? localStorage.getItem("lang")
          : "",
      },
    });
    if (data) {
      if (data.code == 5002006) {
        return data as T;
      }
      if (!data.success) {
        return Promise.reject(data);
      }
    }
    return data.data as T;
  }

  // get 请求
  async get<T = any>(uri: string) {
    const { data } = await this.request.get(uri, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "x-language": localStorage.getItem("lang")
          ? localStorage.getItem("lang")
          : "",
      },
    });
    if (!data.success) {
      return Promise.reject(data);
    }
    return data.data as T;
  }
}
