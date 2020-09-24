<template>
  <div class="navigation">
    <Container>
      <div class="navbar">
        <div class="logo">
          <a href="/"> <span>B</span>log. </a>
        </div>
        <div class="nav-button" v-on:click="displayNavbar">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-justify"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <nav class="navbar-nav">
          <ul>
            <li>
              <a href="#home" v-on:click="$emit('home-page')">Home</a>
            </li>
            <li>
              <a href="#all-posts" v-on:click="$emit('all-post')">All Posts</a>
            </li>
            <li>
              <a href="#contact" v-on:click="$emit('contact')">Contact</a>
            </li>
          </ul>
          <Input
            tyoe="search"
            name="search"
            id="header-search"
            :placeholder="'Search'"
          />
        </nav>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "./Utils/Container.vue";
import Input from "./Forms/Input.vue";
export default {
  name: "TheNavbar",
  components: {
    Container,
    Input,
  },
  props: {},
  data() {
    return {
      displayNavbar: function () {
        if (document.querySelector(".navbar").style.height === "360px") {
          document.querySelector(".navbar").style.height = "70px";
        } else {
          document.querySelector(".navbar").style.height = "360px";
        }
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  width: 100%;
  margin: auto;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 100000;
  border-bottom: 1px solid #eee;
}
/* Styles For Navbar */
.navbar {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  font-family: "Merriweather Sans", serif;
  align-items: center;
  background-color: var(--white);
}
a {
  text-decoration: none;
  color: var(--text);
  cursor: pointer;
}

/* Styles For Logo */
.logo {
  font-size: 32px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: var(--text);
}
.logo a > span {
  color: var(--primary);
}

/* Styles For Navigation Menu */
nav {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-weight: bold;
}
nav ul li {
  margin-right: 15px;
}
nav ul li:hover {
  opacity: 0.8;
}
nav input {
  width: 180px;
  height: 40px;
  padding: 8px 12px;
  margin-left: 20px;
  margin-bottom: 0;
}

/* Style For Button */
.nav-button {
  font-size: 32px;
  display: none;
}

/* Media Queries */
@media (max-width: 860px) {
  .navbar {
    display: flex;
    flex-direction: column !important;
    text-align: left;
    transition: 0.2s;
    padding: 12px 30px;
  }
  .logo {
    width: 100%;
    margin-bottom: 15px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: var(--white);
  }
  nav ul {
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    height: 200px;
  }
  nav ul li {
    height: 40px;
    width: 100%;
  }
  nav input {
    margin: 10px 0;
  }

  .nav-button {
    display: flex;
    position: absolute;
    right: 40px;
    margin-top: 5px;
    cursor: pointer;
  }
}
</style>
