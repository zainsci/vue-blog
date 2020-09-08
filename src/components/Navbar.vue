<template>
  <div class="navbar">
    <div class="logo">
      <span>B</span>log.
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Notes</a>
        </li>
        <li>
          <a href="#">Health</a>
        </li>
        <li>
          <a href="#">Entertainment</a>
        </li>
      </ul>
      <input type="search" name="search" id="header-search" placeholder="Search" />
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      displayNavbar: function () {
        if (document.querySelector(".navbar").style.height === "340px") {
          document.querySelector(".navbar").style.height = "70px";
        } else {
          document.querySelector(".navbar").style.height = "340px";
        }
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Styles For Navbar */
.navbar {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 60px;
  font-family: "Montserrat", sans-serif;
  background-color: white;
  position: fixed;
  top: 0;
}
a {
  text-decoration: none;
  color: var(--black-text);
}

/* Styles For Logo */
.logo {
  font-size: 32px;
  font-family: "Roboto Slab", serif;
  color: var(--black-text);
}
.logo > span {
  color: var(--purple);
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
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding: 8px 12px;
  margin-left: 30px;
  transition: 0.1s;
}
nav input:focus {
  outline: none;
  border: 2px solid var(--purple);
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
    background-color: white;
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
    right: 60px;
    margin-top: 5px;
    cursor: pointer;
  }
}
</style>
