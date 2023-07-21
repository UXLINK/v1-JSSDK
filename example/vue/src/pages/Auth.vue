<template>
  <div class="flex flex-col items-center mt-[100px]">
    <div class="mt-[50px]">登陆功能</div>
    <authButton />

    <div class="mt-[50px]">支付功能</div>
    <payButton />
  </div>
</template>

<script lang="ts">
  import authButton from "../components/authButton.vue";
  import payButton from "../components/payButton.vue";

  export default {
    name: "AuthPage",
    components: {
      authButton,
      payButton,
    },
    setup() {},
  };
</script>
