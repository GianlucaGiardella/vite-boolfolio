import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppContact from "./pages/AppContact.vue";
import ProjectsIndex from "./pages/ProjectsIndex.vue";
import ProjectsShow from "./pages/ProjectsShow.vue";
import App404 from "./pages/App404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/contact",
      name: "contact",
      component: AppContact,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndex,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: ProjectsShow,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page404",
      component: App404,
    },
  ],
});

export { router };
