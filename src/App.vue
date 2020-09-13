<template>
  <div id="app">
    <Navbar />
    <TheHeader />
    <Post
      postHeaderImg="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1504"
      authorImg="https://images.unsplash.com/photo-1532657625859-9e44633fabf0?w=1050"
    />
    <TheFooter />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TheHeader from "./components/TheHeader.vue";
import Post from "./components/Post.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    TheHeader,
    Post,
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
