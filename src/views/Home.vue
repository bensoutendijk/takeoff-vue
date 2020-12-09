<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-12 center-header">
        <h3 class="center-header-text">Home</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12"></div>
    </div>
    <div class="row">
      <div class="col-12">
        <TakeFeed />
      </div>
    </div>
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

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.center-header {
  border-bottom: $dark-border;

  .center-header-text {
    font-weight: 700;
  }
}
</style>
