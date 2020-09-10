<template>
  <div id="app">
    <Navbar />
    <Post postHeaderImg="https://images.unsplash.com/photo-1515311320503-6e3d309537b4?w=1534" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Post from "./components/Post.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Post,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Domine&display=swap");
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
  font-family: "Open Sans", sans-serif;
  line-height: 1.75;
  color: var(--black-text);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--black-text);
  font-family: "Domine", serif;
}
</style>
