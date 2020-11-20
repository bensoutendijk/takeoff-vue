<template>
  <div>
    <h2>{{ user.name }}</h2>
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
