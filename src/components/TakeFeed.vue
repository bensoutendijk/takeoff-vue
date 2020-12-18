<template>
  <div class="takefeed" v-if="takes.fetched">
    <Take v-for="id in takes.allIds" :key="id" :take="takes.byId[id]" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Take from "@/components/Take.vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "TakeFeed",
  components: {
    Take
  },
  computed: mapState({
    takes: state => state.takes
  }),
  created() {
    this.$store.dispatch("fetchTakes");
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.takefeed {
  height: calc(100vh - 62px);
  overflow: overlay;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
