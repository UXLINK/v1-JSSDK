import UYUXGateway from "./gateway";
export default class MPC {
  private token: string;
  private gateway: UYUXGateway;

  constructor(token: string, gateway: UYUXGateway) {
    this.token = token;
    this.gateway = gateway;
  }
  // acquire user mpc key. When transfer or withdrawal, user need to send this part of key to uxuy system to sign. For security, each DAPP has different mpc key.
  async getUserMpcKey() {
    try {
      const data = await this.gateway.get(this.token, "/api/v1/getUserMpcKey");
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
