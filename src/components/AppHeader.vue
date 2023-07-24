<script>
import store from "../store";
import ProjectFilter from "./ProjectFilter.vue";


export default {
  components: {
    ProjectFilter,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <h1 class="fs-3 mb-0">Boolfolio</h1>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'projects.index' }" class="nav-link">
              Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link">
              Contact us
            </router-link>
          </li>
        </ul>

        <ProjectFilter />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar-brand {
  color: rgba(var(--bs-link-color-rgb))
}
</style>
