<template>
  <div>
    <button type="button" @click="auth">auth</button>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { computed } from "vue";
  export default {
    name: "AuthButton",
    components: {},
    emits: [],
    setup() {
      const auth = () => {
        // 业务
      };

      return {
        auth,
      };
    },
  };
</script>

<style scoped></style>
