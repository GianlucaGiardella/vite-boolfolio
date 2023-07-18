<script>
import axios from "axios";
import store from "../store";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },
  data() {
    return {
      project: null,
      store,
      is404: false,
    };
  },
  created() {
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => {
        if (response.data.success) {
          this.project = response.data.results;
        } else {
          this.is404 = true;
        }
      });
  },
};
</script>

<template>
  <App404 v-if="is404" />
  <template v-else-if="project">
    <h1>{{ project.title }}</h1>
    <img :src="this.store.getImageUrl(project.image)" :alt="project.title" />
    <p>{{ project.description }}</p>
  </template>
</template>

<style lang="scss" scoped></style>
