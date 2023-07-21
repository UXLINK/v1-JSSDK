<template>
  <div>
    <button type="button" @click="payment">payment</button>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { computed } from "vue";
  export default {
    name: "payButton",
    components: {},
    emits: [],
    setup() {
      const payment = () => {
        // 业务
      };

      return {
        payment,
      };
    },
  };
</script>

<style scoped></style>
