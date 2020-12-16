<template>
  <div class="container app-container">
    <div class="row app-grid">
      <div class="col-2">
        <nav class="nav side-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="nav-icon fal fa-rocket-launch"></i>
            </router-link>
          </li>
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <router-link class="nav-link" :to="item.path">
              <i :class="`nav-icon fal fa-${item.icon}`"></i>
              <span class="nav-link-text">{{ item.title }}</span>
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

body {
  overflow: auto;

  /* total width */
  ::-webkit-scrollbar {
    background-color: $dark-background-hex;
    width: 16px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: $dark-background-hex;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid $dark-background-hex;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  background-color: $dark-background-rgba;
  color: $dark-text-rgba;
}

.app-container {
  max-width: 1440px;
}

.app-grid > div {
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
    font-size: 1.6rem;
    font-weight: 700;
  }

  .nav-icon {
    min-width: 36px;
  }

  .nav-link-text {
    margin-left: 15px;
  }
}
</style>
