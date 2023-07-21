import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(), // history模式
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Index.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../pages/Auth.vue"),
    },
  ],
});

export default router;
