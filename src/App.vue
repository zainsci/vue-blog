<template>
  <div id="app">
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans&display=swap");

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
  font-family: "Merriweather", serif;
}
</style>
