import HomePage from "../components/HomePage.vue";
import ContactForm from "../components/ContactForm.vue";
import AllPosts from "../components/AllPosts.vue";

const Routes = [
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

export default Routes;
