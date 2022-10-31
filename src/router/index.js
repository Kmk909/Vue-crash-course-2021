// import { createRouter, createWebHistory, RouterLink } from "vue-router";
import VueRouter from "vue-router";
import About from "../views/About";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
