<template>
  <div class="take">
    <h5 class="take-header take-username">{{ take.user.username }}</h5>
    <p>{{ take.message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Take",
  props: {
    take: Object
  }
});
</script>

<style lang="scss">
.take {
  padding: 0.25em;
}

.take-username {
  font-weight: 700;
}
</style>
