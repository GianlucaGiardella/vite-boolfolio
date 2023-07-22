<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<template>
    <footer class="bg-body-tertiary">
        <div class="container">
            <div class="my-3 py-3">
                <ul class="nav justify-content-center border-bottom pb-2 mb-3">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'projects.index' }" class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contact' }" class="nav-link">Contact Us</router-link>
                    </li>
                </ul>
                <p class="text-secondary text-center">© 2023 GianluGiarde</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>
