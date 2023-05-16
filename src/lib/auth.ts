// 社交账号授权模块

import UYUXGateway from "./gateway";
import { LoginAuthType } from "../handlers/interfaces";
import WechatHandler from "../handlers/wechatHandler";
import telegramHandler from "../handlers/telegramHandler";
export default class UYUXAuth {
  async connectTo(
    loginProvider: number,
    appid: string,
    redirect_uri: string,
    state: string
  ) {

    if (loginProvider == LoginAuthType.wx) {
      const wechat = new WechatHandler();
      wechat.init({
        appid,
        redirect_uri,
        state,
      });
    }
    if (loginProvider == LoginAuthType.tg) {
      const tg = new telegramHandler();
      tg.init({});
    }

    return appid;
  }

  async toWX(code: string) {
    try {
      if (code) {
        const tokenInfo = await this.client.post("/user/wx/login", { code });
        if (tokenInfo) {
          return tokenInfo.accessToken;
        }
        return "";
      }
    } catch (error) {
      console.error(error);
    }
  }

  async toTg(params: any) {
    try {
      if (params.code) {
        const obj = {
          code: params.code,
          tgId: Number(params.id),
          firstName: params.first_name,
          lastName: params.username,
          authDate: params.auth_date,
          hash: params.hash,
          photoUrl: params.photo_url,
        };
        const tokenInfo = await this.client.post("/user/tg/login", obj);
        if (tokenInfo) {
          return tokenInfo.accessToken;
        }
        return obj;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // session 转换成token
  async toSessionTgLogin(session: any) {
    try {
      if (session) {
        const tokenInfo = await this.client.post("/user/tg/session/login", {
          session,
        });
        if (tokenInfo) {
          return tokenInfo.accessToken;
        }
        return "";
      }
    } catch (error) {
      console.error(error);
    }
  }

  getToken() {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return token;
    }
    return "";
  }
}
