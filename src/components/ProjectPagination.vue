<script>
import store from "../store";

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        toPrevPage() {
            this.store.page != 1 ? this.store.page-- : "";
        },
        toNextPage() {
            this.store.page != this.store.maxPages ? this.store.page++ : "";
        },
    },
}
</script>

<template>
    <nav>
        <ul class="pagination my-0 justify-content-end">
            <li class="page-item">
                <a class="page-link" :class="{ disabled: store.page == 1 }" href="#" aria-label="Previous"
                    @click="toPrevPage">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="page in store.maxPages" :key="page" class="page-item" :class="{ active: page === store.page }">
                <a class="page-link" href="#" @click="store.page = page">
                    {{ page }}
                </a>
            </li>
            <li class="page-item">
                <a class="page-link" :class="{ disabled: store.page == store.maxPages }" href="#" aria-label="Next"
                    @click="toNextPage">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style> 