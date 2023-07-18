<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
@import "bootstrap/scss/bootstrap";
</style>
