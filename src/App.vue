<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />

  <div class="container py-5">
    <router-view></router-view>
  </div>

  <AppFooter />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
@import "bootstrap/scss/bootstrap";
</style>
