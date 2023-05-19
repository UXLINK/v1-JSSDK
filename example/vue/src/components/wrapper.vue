<template>
  <div class="rounded-3xl bg-[#313131] text-[#888] h-full">
    <div class="flex flex-col justify-around items-center mx-10">
      <div class="w-full mt-10">
        <div
          class="flex bg-[#faff44] rounded-3xl flex-col justify-around items-center text-[#0e0e0e] py-10">
          <img :src="data.avatar" class="rounded-full w-16 h-16" />
          <div class="text-center py-2 my-4">
            <div
              class="border border-[#cecd96] text-[#95981a] rounded-full py-2 mb-4 px-2">
              <p class="text-sm">userName:{{ data.name }}</p>
            </div>
            <div
              class="border border-[#cecd96] text-[#95981a] rounded-full p-2 mb-4">
              <p class="text-sm">didName:{{ data.did }}</p>
            </div>
            <div
              class="border border-[#cacd96] text-[#95981a] rounded-full p-2 mb-3">
              <p class="text-sm">注册时间:{{ data.createdAt }}</p>
            </div>
          </div>
          <div class="flex flex-row px-6 justify-around w-full">
            <img
              src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg"
              class="w-10 h-10 rounded-full" />
            <img
              src="https://th.bing.com/th/id/OIP.PnnZyIJgilZ0iPT5aAoDWAAAAA?pid=ImgDet&rs=1"
              class="w-10 h-10 rounded-full" />
            <img
              src=" https://th.bing.com/th/id/OIP.DNv9CEGSoqhZ_onc5W4TSAHaHa?pid=ImgDet&rs=1"
              class="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
      <div class="w-full pb-10">
        <div class="flex flex-col px-2 mt-10">
          <p class="text-xl">UXUY Token</p>
          <p class="text-[#fff] text-3xl">2000</p>
        </div>
        <div class="flex flex-col px-2 mt-10">
          <p class="text-xl">Scroll Token</p>
          <p class="text-[#fff] text-3xl">0</p>
        </div>
      </div>

      <!-- <ButtonLogin
        mode="callback"
        size="large"
        bot-username="testLoginBtnBot"
        @callback="loginWithTelegram" /> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from "vue";
  export default {
    name: "UserInfo",
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    components: {
      // ButtonLogin,
    },
    setup() {
      return {};
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
