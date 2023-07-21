<template>
  <div class="bg-[#86b142] overflow-hidden">
    <Header />
    <div class="flex flex-row m-10 w-full h-screen">
      <Wrapper class="basis-1/4 mr-6" :data="userInfoData" />
      <DeviceFrame
        class="basis-2/3 mr-6"
        :data="recommentData"
        @onclick="touchSocialItem"
        :otherData="myFriendData" />
    </div>
  </div>
</template>

<script lang="ts">
  import Header from "../components/header.vue";
  import Wrapper from "../components/wrapper.vue";
  import DeviceFrame from "../components/deviceFrame.vue";
  import UXUYClient from "../../../../index.d.ts";
  import { onMounted, ref } from "vue";

  export default {
    name: "App",
    components: {
      Header,
      Wrapper,
      DeviceFrame,
    },
    setup() {
      const address = "6ZuzN4MOiLjEqIsQ";
      const UXUYToken = ref("");
      const recommentData = ref<any>();
      const userInfoData = ref<any>();
      const myFriendData = ref<any>();
      const profileApi = ref<any>();

      const initUXUYSDK = async () => {
        const token = await UXUYClient.register("ApiKey");
        UXUYToken.value = token;

        const instance = new UXUYClient();
        const { profile } = instance.init(UXUYToken.value);
        profileApi.value = profile;

        recommentData.value = await profileApi.value.recomment({
          limit: 1,
          cursor: "",
        });

        userInfoData.value = await profileApi.value.userInfo(address);

        touchSocialItem({ uxuyId: recommentData.value.list[0].uxuyId });
      };

      const touchSocialItem = async (value: any) => {
        console.log(value);
        myFriendData.value = await profileApi.value.userInfo(value.uxuyId);
      };

      onMounted(() => {
        initUXUYSDK();
      });

      return {
        recommentData,
        userInfoData,
        myFriendData,
        touchSocialItem,
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
