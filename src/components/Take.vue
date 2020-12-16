<template>
  <div class="container take">
    <div class="row take-row">
      <div class="col take-profile-image-container">
        <img :src="take.user.profileImage" class="take-profile-image" />
      </div>
      <div class="col">
        <strong class="take-header take-username">{{ take.user.name }}</strong>
        &ensp;<span>@{{ take.user.handle }}</span>
        <p>{{ take.message }}</p>
        <p class="take-media-item" v-for="media in take.media" :key="media.id">
          <img :src="media.url" class="take-media-image" />
        </p>
      </div>
    </div>
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

.take-row {
  margin-left: 0;
  margin-right: 0;
}

.take-username {
  font-weight: 700;
}

.take-profile-image-container {
  max-width: 50px;
  margin-right: 15px;
}

.take-profile-image {
  width: 50px;
  border-radius: 50%;
}

.take-media-image {
  width: 300px;
}
</style>
