<template>
  <footer>
    <BaseContainer>
      <div class="logo">
        <span>B</span>LOG.
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </BaseContainer>
    <div
      class="footer-back-img"
      style="background-image: url(https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?w=1050)"
    ></div>
  </footer>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
export default {
  name: "TheFooter",
  components: { BaseContainer },
  props: {},
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 400px;
  background-color: #020607;
  padding: 40px 0;
  position: relative;
  padding: 20px;
}

.footer-back-img {
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
}
.logo {
  font-size: 64px;
  font-family: "Oswald", sans-serif;
  color: var(--white);
  position: relative;
  z-index: 101;
}
.logo span {
  color: var(--primary);
}

ul {
  font-size: 24px;
  color: var(--white);
  list-style-type: none;
  margin-left: 10px;
  position: relative;
  z-index: 102;
}
ul li a {
  color: var(--white);
  text-decoration: none;
}

@media (max-width: 575px) {
  .footer-back-img {
    width: 100%;
    z-index: 1;
  }
}
</style>