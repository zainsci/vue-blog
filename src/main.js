import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./router/index.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const Router = new VueRouter({
  routes: Routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router: Router,
}).$mount("#app");
