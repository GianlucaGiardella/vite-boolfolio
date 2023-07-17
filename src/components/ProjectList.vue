<script>
import axios from "axios";
import store from "../store";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
      arrProjects: [],
      totalPages: 0,
      currentPage: 1,
    };
  },
  methods: {
    getProjects() {
      axios
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrProjects = response.data.data;
          this.totalPages = response.data.last_page;
        });
    },
    toPrevPage() {
      this.currentPage != 1 ? this.currentPage-- : "";
    },
    toNextPage() {
      this.currentPage != this.totalPages ? this.currentPage++ : "";
    },
  },
  created() {
    this.getProjects();
  },
  watch: {
    currentPage() {
      this.getProjects();
    },
  },
};
</script>

<template>
  <ul class="row row-cols-4 g-5">
    <li class="col" v-for="project in arrProjects" :key="project.id">
      <ProjectCard :projectObj="project" />
    </li>
  </ul>

  <nav>
    <ul class="pagination my-0">
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: currentPage == 1 }"
          href="#"
          aria-label="Previous"
          @click="toPrevPage"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in totalPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
      >
        <a class="page-link" href="#" @click="currentPage = page">
          {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: currentPage == totalPages }"
          href="#"
          aria-label="Next"
          @click="toNextPage"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
