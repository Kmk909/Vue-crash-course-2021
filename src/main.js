import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
const About = { template: "<h3>About</h3>" };
const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";

// createApp(App).use(router).mount("#app");
