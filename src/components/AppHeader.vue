<script>
export default {
  data() {
    return {
      searchString: "",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        Boolfolio
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'projects.index' }"
              class="nav-link active"
            >
              Projects
            </router-link>
          </li>
        </ul>

        <form
          class="d-flex"
          role="search"
          @submit.prevent="
            $router.push({
              name: 'projects.index',
              query: { q: searchString },
            })
          "
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="q"
            v-model="searchString"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
