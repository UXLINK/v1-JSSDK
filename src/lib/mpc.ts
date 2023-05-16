// SBT管理模块
import UYUXClint from "../../index";

export default class MPC {
  private client: UYUXClint;
  constructor(client: UYUXClint) {
    this.client = client;
  }

  // acquire user mpc key. When transfer or withdrawal, user need to send this part of key to uxuy system to sign. For security, each DAPP has different mpc key.
  async getUserMpcKey() {
    try {
      const data = await this.client.get("/api/v1/getUserMpcKey");
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
