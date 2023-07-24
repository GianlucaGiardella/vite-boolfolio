<script>
import store from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    projectObj: Object,
  },
  methods: {
    getImageUrl(image) {
      return image
        ? this.store.baseUrl + "storage/" + image
        : this.store.baseUrl + "storage/default.jpg";
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img :src="getImageUrl(projectObj.image)" class="card-img-top" :alt="projectObj.title" style="height: 200px" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title" style="height: 80px">{{ projectObj.title }}</h5>
      <h6 class="card-text mb-2">Tipo: {{ projectObj.type.name }}</h6>
      <router-link :to="{ name: 'projects.show', params: { slug: projectObj.slug } }" class="btn btn-primary mt-auto">
        Guarda
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
