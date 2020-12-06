<template>
  <div class="container">
    <div class="row app-grid">
      <div class="col-2">
        <nav class="nav side-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <h4><i class="fal fa-dove"></i></h4>
            </router-link>
          </li>
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <router-link class="nav-link" :to="item.path">
              <h4>
                <i :class="`fal fa-${item.icon}`"></i>
                &emsp;{{ item.title }}
              </h4>
            </router-link>
          </li>
        </nav>
      </div>
      <div class="col-6">
        <router-view />
      </div>
      <div class="col-4">
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "app",
  components: {
    SearchBar
  },
  data() {
    return {
      navItems: [
        { title: "Home", icon: "home", path: "/" },
        { title: "About", icon: "ellipsis-h-alt", path: "/about" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $dark-background-rgba;
  color: $dark-text-rgba;
}

.app-grid > div {
  height: 100vh;
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  border-right: $dark-border;

  &:nth-last-child(2) {
    border: none;
  }

  &:last-child {
    border-right: none;
    border-left: $dark-border;
  }
}

a {
  color: $dark-primary-rgba;
}

.side-nav {
  display: flex;
  flex-direction: column;

  .nav-link {
    color: $dark-text-hex;
  }
}
</style>
