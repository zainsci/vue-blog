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
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Slab:wght@700&display=swap");
:root {
  --black-text: #33353b;
  --purple: #5444da;
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
  font-family: "Montserrat", sans-serif;
}
</style>
