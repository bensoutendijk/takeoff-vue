<template>
  <div class="take">
    <h5 class="take-header take-username">{{ user.name }}</h5>
    <p>{{ take.message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import data from "@/mockData";
const { users } = data;

export default defineComponent({
  name: "Take",
  props: {
    take: Object
  },
  data: function() {
    const { take } = this;
    if (!take) {
      return;
    }

    const user = users.find(user => take.userId === user.id);
    return {
      user
    };
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
