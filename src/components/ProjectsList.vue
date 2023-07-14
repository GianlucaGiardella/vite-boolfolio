<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      arrProjects: [],
      totalPages: 0,
      currentPage: 1,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.getProjects();
    },
    getProjects() {
      axios
        .get("http://localhost:8000/api/projects", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrProjects = response.data.data;
          this.totalPages = response.data.last_page;
        });
    },
  },
  created() {
    this.getProjects();
  },
  components: {
    ProjectCard,
  },
};
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h1>Lista Progetti</h1>

      <nav class="d-flex justify-content-end align-items-center">
        <ul class="pagination my-0">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="page-item"
            :class="{ active: page == currentPage }"
          >
            <span class="page-link" @click="changePage(page)">
              {{ page }}
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <hr />

    <ul class="row justify-content-evenly gap-3">
      <ProjectCard
        v-for="project in arrProjects"
        :key="project.id"
        :projectObj="project"
      />
    </ul>

    <nav>
      <ul class="pagination my-0">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page == currentPage }"
        >
          <span class="page-link" @click="changePage(page)">
            {{ page }}
          </span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
