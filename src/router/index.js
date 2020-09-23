import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage.vue";
import ContactForm from "../components/ContactForm.vue";

Vue.use(Router);

const routes = [
  { path: "/home", component: HomePage },
  {
    path: "/contact",
    component: ContactForm,
  },
];

const router = new Router({
  routes: routes,
});

export default function createRouter() {
  return router;
}
