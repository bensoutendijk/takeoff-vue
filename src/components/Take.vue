<template>
  <div class="take">
    <strong class="take-header take-username">{{ take.user.name }}</strong>
    &ensp;<span>@{{ take.user.handle }}</span>
    <p>{{ take.message }}</p>
    <p class="take-media-item" v-for="media in take.media" :key="media.id">
      <img :src="media.url" class="take-media-image" />
    </p>
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
