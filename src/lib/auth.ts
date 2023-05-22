// 社交账号授权模块

// import UYUXGateway from "./gateway";
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
}
