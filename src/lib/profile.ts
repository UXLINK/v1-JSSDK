// SBT管理模块
import UYUXGateway from "./gateway";
export default class Profile {
  private token: string;
  private gateway: UYUXGateway;

  constructor(token: string, gateway: UYUXGateway) {
    this.token = token;
    this.gateway = gateway;
  }
  // The recommendation engine recommends potential friends to DApp based on tags they add.
  async recomment(params: any) {
    const limit = params.limit;
    const cursor = params.cursor;

    try {
      const data = await this.gateway.get(
        this.token,
        `/api/v1/recommend?limit=${limit}&cursor=${cursor}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // To return a user's information.
  async userInfo() {
    try {
      const data = await this.gateway.get(this.token, "/api/v1/userInfo");
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
