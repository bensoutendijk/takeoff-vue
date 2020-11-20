<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TakeFeed msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TakeFeed from "@/components/TakeFeed.vue";

export default defineComponent({
  name: "Home",
  components: {
    TakeFeed
  }
});
</script>
