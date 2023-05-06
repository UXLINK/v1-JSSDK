import UYUXGateway from "./src/lib/gateway";
import UYUXAuth from "./src/lib/auth";
import UYUXAccount from "./src/lib/account";
import UYUXSBT from "./src/lib/sbt";

export default class UYUXClient {
  private gateway: UYUXGateway;
  auth: UYUXAuth;
  account: UYUXAccount;
  sbt: UYUXSBT;

  constructor() {
    this.gateway = new UYUXGateway();
    this.auth = new UYUXAuth(this);
    this.account = new UYUXAccount(this);
    this.sbt = new UYUXSBT(this);
  }

  get<T = any>(uri: string) {
    return this.gateway.get<T>(uri);
  }

  post<T = any>(uri: string, params: Record<string, any> = {}) {
    return this.gateway.post<T>(uri, params);
  }
  // did
}
