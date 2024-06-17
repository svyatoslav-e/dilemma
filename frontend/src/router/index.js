import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/model/:id",
      name: "model",
      component: () => import("../views/Model.vue"),
    }
  ],
});

export default router;
