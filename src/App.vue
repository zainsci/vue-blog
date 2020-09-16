<template>
  <div id="app">
    <TheNavbar />
    <TheHeader />
    <BaseAdBanner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <FeaturedArticles />
    <BaseUserPosts />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheHeader from "./components/TheHeader.vue";
import BaseAdBanner from "./components/BaseAdBanner.vue";
import FeaturedArticles from "./components/FeaturedArticles.vue";
import BaseUserPosts from "./components/BaseUserPosts.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    BaseAdBanner,
    FeaturedArticles,
    BaseUserPosts,
    TheFooter,
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
}
</style>
