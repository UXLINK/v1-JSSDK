import UYUXGateway from "./gateway";
export default class Did {
  private token: string;
  private gateway: UYUXGateway;

  constructor(token: string, gateway: UYUXGateway) {
    this.token = token;
    this.gateway = gateway;
  }
  // Name-resolving services.
  async getAddress(did: any) {
    try {
      const data = await this.gateway.get(
        this.token,
        `/api/v1/getAddress?did=${did}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // Reverse Resolve DID Name
  async getName(address: any) {
    try {
      const data = await this.gateway.get(
        this.token,
        `/api/v1/getName?address=${address}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
