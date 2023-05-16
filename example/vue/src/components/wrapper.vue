<template>
  <div class="rounded-md border border-[#121212]">
    <div class="flex">
      <p>sign in</p>
      <p>Your blockchain account in one-click</p>
    </div>
    <div class="flex flex-row justify-around">
      <!-- <a :href="qrcodeUrl" target="_blank"> -->
      <button class="rounded border border-[#101010]" @click="generateQRCode">
        wechat Login2
      </button>

      <!-- <ButtonLogin
        mode="callback"
        size="large"
        bot-username="testLoginBtnBot"
        @callback="loginWithTelegram" /> -->

      <a
        href="https://oauth.telegram.org/auth?bot_id=6090573042&origin=https%3A%2F%2Fdocs.uxuy.io&embed=1&request_access=read&return_to=widgets%2Flogin.html"
        target="_blank">
        <button class="rounded border border-[#101010]">Telegram Login</button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from "vue";
  // import { ButtonLogin } from "televue";

  export default {
    name: "App",
    components: {
      // ButtonLogin,
    },
    setup() {
      const qrcodeUrl = ref("");

      const generateQRCode = () => {
        // 替换为您自己的 appid、redirect_uri、state 等参数
        const appId = "wxe86412a86fc30fc2";
        const redirectUri = "https://uxuy.xws.cn/auth";
        const state = "UXUY";

        // 生成二维码链接
        const qrcodeUrlValue = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&redirect_uri=${encodeURIComponent(
          redirectUri
        )}&response_type=code&scope=snsapi_login&state=UXUY#wechat_redire`;
        // const qrcodeUrlValue = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&prompt=login&response_type=code&redirect_uri=${encodeURIComponent(
        //   redirectUri
        // )}&scope=snsapi_login&state=${state}&client_id=${appId}`;

        qrcodeUrl.value = qrcodeUrlValue;
        console.log("qrcodeUrl", qrcodeUrl);
      };
      const loginWithTelegram = async (user: any) => {
        console.log("loginWithTelegram", user);
        // Follow this link to see how you can verify user data on backend
        // https://core.telegram.org/widgets/login#checking-authorization
      };
      return {
        qrcodeUrl,
        generateQRCode,
        loginWithTelegram,
      };
    },
  };
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
