import UYUXGateway from "./src/lib/gateway";
import UYUXAuth from "./src/lib/auth";
import profile from "./src/lib/profile";
import MPC from "./src/lib/mpc";
import DID from "./src/lib/did";

import { LoginAuthType } from "./src/handlers/interfaces";

export default class UYUXClient {
  private static apiKey: string | null = null;
  private token: string | null = null;
  private gateway: UYUXGateway | null = null;

  auth: UYUXAuth;
  sbt: UYUXSBT;
  loginTpey: LoginAuthType;

  static async register(apiKey: string): Promise<string> {
    UYUXClient.apiKey = apiKey;

    this.gateway = new UYUXGateway(UYUXClient.apiKey);

    const token = await this.getToken(apiKey);
    return token;
  }

  private static async getToken(apiKey: string): Promise<string> {
    const response = await this.gateway.post("", "/api/v1/auth");
    const token = response.token;
    return token;
  }

  constructor() {
    if (!UYUXClient.apiKey) {
      throw new Error("API key not registered");
    }
    this.gateway = new UYUXGateway(UYUXClient.apiKey); // 初始化 gateway 对象
  }

  init<T = any>(token: string) {
    //
    this.token = token;
    return {
      profile: new profile(token, this.gateway),
      mpc: new MPC(token, this.gateway),
      did: new DID(token, this.gateway),
    };
  }

  get<T = any>(uri: string) {
    if (!this.gateway) {
      throw new Error("Gateway not initialized");
    }
    return this.gateway.get<T>(uri);
  }

  post<T = any>(uri: string, params: Record<string, any> = {}) {
    if (!this.gateway) {
      throw new Error("Gateway not initialized");
    }
    return this.gateway.post<T>(uri, params);
  }
  // did
}
