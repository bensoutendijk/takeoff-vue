<template>
  <div v-for="take in takes" :key="take.id">
    <Take :take="take" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Take from "@/components/Take.vue";
import data from "@/mockData";

const { takes } = data;

export default defineComponent({
  name: "TakeFeed",
  components: {
    Take
  },
  data() {
    return {
      takes
    };
  }
});
</script>
