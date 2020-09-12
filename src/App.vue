<template>
  <div id="app">
    <Navbar />
    <MainHeader />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MainHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&family=Merriweather+Sans&display=swap");

:root {
  --secondary: #1d689e;
  --primary: #0366d6;
  --dark: #032f62;
  --text: #292929;
  --white: #ffffff;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
  line-height: 1.25;
}
</style>
