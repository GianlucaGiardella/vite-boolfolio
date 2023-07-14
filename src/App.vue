<script>
import ProjectsList from "./components/ProjectsList.vue";

export default {
  components: {
    ProjectsList,
  },
};
</script>

<template>
  <ProjectsList />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
@import "bootstrap/scss/bootstrap";
</style>
