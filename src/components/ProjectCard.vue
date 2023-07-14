<script>
export default {
  data() {
    return {};
  },
  props: {
    projectObj: Object,
  },
};
</script>

<template>
  <li class="card col-3 overflow-hidden" style="width: 18rem">
    <img :src="projectObj.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title" style="height: 5rem">{{ projectObj.title }}</h5>
      <p class="card-text overflow-y-scroll" style="height: 18rem">
        {{ projectObj.description }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Autore: {{ projectObj.author }}</li>
      <li class="list-group-item">Tipo: {{ projectObj.type.name }}</li>
      <li class="list-group-item">
        <div>Linguaggi:</div>
        <span v-for="technology in projectObj.technologies">
          {{ technology.name }},
        </span>
      </li>
    </ul>
  </li>
</template>

<style lang="scss" scoped></style>
