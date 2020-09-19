<template>
  <div id="app">
    <TheNavbar
      @sign-up="showSignUp"
      @log-in="showLogIn"
      @all-post="showAllPost"
      @home-page="showHomePage"
    />
    <component :is="MainPage"></component>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import HomePage from "./components/HomePage.vue";
import SignUpForm from "./components/SignUpForm.vue";
import LoginForm from "./components/LoginForm.vue";
import AllPosts from "./components/AllPosts.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    HomePage,
    SignUpForm,
    LoginForm,
    AllPosts,
    TheFooter,
  },
  data() {
    return {
      MainPage: null,
    };
  },
  methods: {
    showSignUp() {
      this.MainPage = "SignUpForm";
    },
    showLogIn() {
      this.MainPage = "LoginForm";
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
</style>
