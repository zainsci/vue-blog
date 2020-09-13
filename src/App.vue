<template>
  <div id="app">
    <TheNavbar />
    <TheHeader />
    <BaseAdBanner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <BaseSection />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheHeader from "./components/TheHeader.vue";
import BaseAdBanner from "./components/BaseAdBanner.vue";
import BaseSection from "./components/BaseSection.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    BaseAdBanner,
    BaseSection,
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
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-weight: 400;
  font-family: "Merriweather Sans", sans-serif;
  color: var(--text);
}
</style>
