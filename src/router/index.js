import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage.vue";
import ContactForm from "../components/ContactForm.vue";
import AllPosts from "../components/AllPosts.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: HomePage },
  { path: "/home", component: HomePage },
  {
    path: "/all-posts",
    component: AllPosts,
  },
  {
    path: "/contact",
    component: ContactForm,
  },
];

export default router = new Router({
  routes: routes,
});
