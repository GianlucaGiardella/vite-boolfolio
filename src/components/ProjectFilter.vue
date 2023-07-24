<script>
import store from "../store";

export default {
    data() {
        return {
            store,
            searchString: "",
            type: 0,
        }
    },
    methods: {
        startSearch() {
            this.store.page = 1;
            this.store.search = this.searchString;
            this.store.type = this.type;
            this.$router.push({
                name: 'projects.index',
                query: {
                    q: this.searchString,
                    t: this.type,
                }
            });
        }
    },
}
</script>

<template>
    <form class="d-flex align-items-center" @submit.prevent="startSearch">
        <select class="form-select" id="type" v-model="type">
            <option value="0" selected>All Types</option>
            <option v-for="projType in store.arrTypes" :key="projType.id" :value="projType.id">
                {{ projType.name }}
            </option>
        </select>

        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="q"
            v-model="searchString" />
        <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
</template>

<style lang="scss" scoped></style>
