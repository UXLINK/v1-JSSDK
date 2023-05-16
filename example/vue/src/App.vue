<template>
  <div class="">
    <Header />
    <div class="flex flex-row">
      <!-- <Wrapper class="basis-1/2" /> -->
      <!-- <DeviceFrame class="basis-1/2" /> -->
    </div>
  </div>
</template>

<script lang="ts">
  import Header from "./components/header.vue";
  import Wrapper from "./components/wrapper.vue";
  import DeviceFrame from "./components/deviceFrame.vue";
  import UXUYClient from "../../../index.d.ts";
  import { onMounted } from "vue";

  export default {
    name: "App",
    components: {
      Header,
      Wrapper,
      DeviceFrame,
    },
    setup() {
      const initUXUYSDK = async () => {
        const token = await UXUYClient.register("ApiKey");
        const instance = new UXUYClient();
        const { profile } = instance.init(token);
        const recomment = await profile.recomment({limit:1,cursor:''});
        const userInfo = await profile.userInfo()
        console.log("recomment", recomment);
        console.log("userInfo", userInfo);
      };

      onMounted(() => {
        initUXUYSDK();
      });

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
