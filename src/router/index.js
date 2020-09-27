import HomePage from "../components/Pages/HomePage.vue";
import ContactForm from "../components/Pages/ContactPage.vue";
import AllPosts from "../components/Posts/AllPosts.vue";
import PostPage from "../components/Posts/PostPage.vue";
import AboutPage from "../components/Pages/AboutPage.vue";

const Routes = [
  { path: "/", component: HomePage },
  { path: "/home", component: HomePage },
  { path: "/about", component: AboutPage },
  {
    path: "/all-posts",
    component: AllPosts,
  },
  {
    path: "/contact",
    component: ContactForm,
  },
  {
    path: "/post/:id",
    component: PostPage,
  },
];

export default Routes;
