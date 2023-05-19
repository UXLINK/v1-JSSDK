<template>
  <div class="flex items-center flex-col rounded-3xl bg-[#f3f8eb]">
    <div class="flex flex-col justify-center items-center mt-6 mb-8">
      <p class="text-lg font-medium">My Social Graph</p>
    </div>
    <div v-if="data" class="w-full px-4">
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
  </div>
</template>

<script lang="ts">
  export default {
    name: "Contacts",
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    components: {},
    setup() {
      return {};
    },
  };
</script>

<style scoped></style>
