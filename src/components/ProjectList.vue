<script>
import axios from "axios";
import store from "../store";
import ProjectCard from "./ProjectCard.vue";
import ProjectPagination from "./ProjectPagination.vue";

export default {
  components: {
    ProjectCard,
    ProjectPagination,
  },
  data() {
    return {
      store,
      arrProjects: [],
      currentPage: 1,
      searchString: "",
      type: 0,
    };
  },
  methods: {
    getProjects() {
      axios
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
            q: this.searchString,
            t: this.type,
          },
        })
        .then(response => {
          this.arrProjects = response.data.results.data;
          this.store.maxPages = response.data.results.last_page;
        });
    },
    getTypes() {
      axios
        .get(this.store.baseUrl + "api/types")
        .then(response => {
          this.store.arrTypes = response.data.results;
        });
    },
  },
  created() {
    this.getProjects();
    this.getTypes();
  },
  watch: {
    'store.page'() {
      this.currentPage = this.store.page;
      this.store.type === this.type && this.store.search === this.searchString ? this.getProjects() : null;
    },
    'store.search'() {
      this.searchString = this.store.search;
      this.store.type === this.type && this.store.page === this.currentPage ? this.getProjects() : null;
    },
    'store.type'() {
      this.type = this.store.type;
      this.store.page === this.currentPage && this.store.search === this.searchString ? this.getProjects() : null;
    },
  },
};
</script>

<template>
  <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 ps-0 mt-0">
    <li class="col mt-3" v-for="project in arrProjects" :key="project.id">
      <ProjectCard :projectObj="project" />
    </li>
  </ul>
  <ProjectPagination />
</template>

<style lang="scss" scoped></style>
