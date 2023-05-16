import axios, { type AxiosInstance } from "axios";
export default class UYUXGateway {
  private apiKey = "";
  private request: AxiosInstance;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.request = axios.create({
      baseURL: "https://test-api.uxuy.io",
    });

    this.request.interceptors.response.use(
      (response: any) => {
        return Promise.resolve(response);
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  async post<T = any>(
    token: string,
    uri: string,
    params: Record<string, any> = {}
  ) {
    const { data } = await this.request.post(uri, params, {
      headers: {
        Authorization: `Bearer ${token}`,
        ApiKey: this.apiKey,
      },
    });
    if (!data.success) {
      return Promise.reject(data);
    }
    return data.data as T;
  }

  async get<T = any>(token: string, uri: string) {
    const { data } = await this.request.get(uri, {
      headers: {
        Authorization: `Bearer ${token}`,
        ApiKey: this.apiKey,
      },
    });
    if (!data.success) {
      return Promise.reject(data);
    }
    return data.data as T;
  }
}
