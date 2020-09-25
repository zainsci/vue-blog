<template>
  <div id="app">
    <app-navbar
      @home-page="showHomePage"
      @all-post="showAllPost"
      @contact="showContact"
    />
    <router-view></router-view>
    <tag-cloud />
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import TagCloud from "./components/TagCloud.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
    TagCloud,
  },
  data() {
    return {
      MainPage: "HomePage",
    };
  },
  methods: {
    showContact() {
      this.MainPage = "ContactForm";
    },
    showAllPost() {
      this.MainPage = "AllPosts";
    },
    showHomePage() {
      this.MainPage = "HomePage";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&family=Merriweather+Sans:wght@300&display=swap");

:root {
  --secondary: #1d689e;
  --primary: #0366d6;
  --dark: #032f62;
  --text: #292929;
  --white: #ffffff;
  --black: #111;
  --red: #ff4e51;
  --yellow: #ffa500;
  --green: #24b47e;
  --purple: #442ebf;

  /* Animation Variables */
  --primary-trans: box-shadow 0.3s ease, transform 0.3s ease;
  --primary-box-shadow: 0 15px 45px -5px rgba(7, 10, 25, 0.25);

  /* Border Variables */
  --primary-border: 1px solid rgba(0, 0, 0, 0.2);
  --primary-radius: 4px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}
body {
  min-height: 100vh;
  padding-top: 70px;
}
img {
  width: 100%;
  height: auto;
}
#app {
  font-weight: 400;
  font-family: "Merriweather Sans", sans-serif;
  color: var(--text);
  line-height: 1.5;
}
nav .router-link-active {
  padding-bottom: 5px;
  border-bottom: 2px solid var(--primary);
}
</style>
