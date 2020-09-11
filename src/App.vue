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
@import url("https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap");
:root {
  --purple: #5444da;
  --white: #fafafa;
  --text: #000000de;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100%;
  background-color: #e8eaee;
  margin-top: 70px;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  color: var(--text);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--text);
  font-family: "Oswald", sans-serif;
}
</style>
