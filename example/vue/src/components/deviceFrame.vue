<template>
  <div class="flex items-center flex-col rounded-3xl bg-[#f3f8eb] overflow-scroll">
    <div class="flex flex-col justify-center items-center mt-6 mb-8">
      <p class="text-lg font-medium">My Social Graph</p>
    </div>
    <div class="flex flex-row w-full mb-10 overflow-scroll">
      <div
        v-if="data"
        class="px-4 w-full overflow-x-hidden">
        <div
          v-for="item in data.list"
          class="flex flex-row justify-between px-3 py-2 rounded-full mx-2 mb-4 bg-white"
          @click="onClickItem(item.uxuyId)">
          <div class="flex flex-row items-center">
            <img :src="item.avatar" class="rounded-full w-10 h-10" />
            <div class="ml-2">
              <p class="text-[#888] text-xl">{{ item.name }}</p>
              <p class="text-sm">{{ item.uxuyId }}</p>
            </div>
          </div>
        </div>
        <div
          v-for="item in data.list"
          class="flex flex-row justify-between px-3 py-2 rounded-full mx-2 mb-4 bg-white">
          <div class="flex flex-row items-center">
            <img :src="item.avatar" class="rounded-full w-10 h-10" />
            <div class="ml-2">
              <p class="text-[#888] text-xl">{{ item.name }}</p>
              <p class="text-sm">{{ item.uxuyId }}</p>
            </div>
          </div>
        </div>
        <div
          v-for="item in data.list"
          class="flex flex-row justify-between px-3 py-2 rounded-full mx-2 mb-4 bg-white">
          <div class="flex flex-row items-center">
            <img :src="item.avatar" class="rounded-full w-10 h-10" />
            <div class="ml-2">
              <p class="text-[#888] text-xl">{{ item.name }}</p>
              <p class="text-sm">{{ item.uxuyId }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="data" class="w-full px-4">
        <div
          class="flex flex-col px-6 py-2 rounded-3xl mx-2 mb-4 bg-[#85b143] h-full">
          <div
            class="flex flex-row items-center bg-[#313131] rounded-3xl py-10 drop-shadow-md mt-10 px-4">
            <img :src="socialData.avatar" class="rounded-full w-10 h-10" />
            <div class="ml-2">
              <p class="text-[#888] text-xl">{{ socialData.name }}</p>
              <p class="text-sm text-[#fff]">user.did : {{ socialData.did }}</p>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="flex flex-col items-center rounded-3xl py-10 drop-shadow-md bg-[#f3f8be] mt-10">
              <p>Twitter</p>
            </div>
            <div
              class="flex flex-col items-center rounded-3xl py-10 drop-shadow-md bg-[#f3f8be] mt-10">
              <p>WeChat</p>
            </div>
            <div
              class="flex flex-col items-center rounded-3xl py-10 drop-shadow-md bg-[#f3f8be] mt-10">
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, computed } from "vue";
  export default {
    name: "Contacts",
    props: {
      data: {
        type: Object,
        default: {},
      },
      otherData: {
        type: Object,
        default: {},
      },
    },
    components: {},
    emits: ["onclick"],
    setup(props, { emit }) {
      const socialData = computed(() => {
        return props.otherData;
      });

      const onClickItem = (id: any) => {
        console.log("id", id);
        emit("onclick", {
          uxuyId: id,
        });
      };

      return {
        onClickItem,
        socialData,
      };
    },
  };
</script>

<style scoped></style>
