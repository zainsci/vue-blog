<template>
  <conatiner>
    <div class="banner">
      <div class="banner-img">
        <img
          src="https://images.unsplash.com/photo-1601126217456-1744cdad7211?w=1050"
          alt="Food Table"
        />
      </div>
      <div class="banner-text">
        <a href="#">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            repellat repellendus repudiandae quibusdam id, molestiae pariatur
            recusandae necessitatibus excepturi in nam quae sapiente, expedita
            quis?
          </h4>
        </a>
        <small>Paid For By Lorem Ipsum</small>
      </div>
    </div>
  </conatiner>
</template>

<script>
import Conatiner from "../Utils/Container.vue";
export default {
  name: "paid-banner",
  components: {
    Conatiner,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--text);
}
a:hover h4 {
  color: var(--primary) !important;
}
.banner {
  max-width: 700px;
  min-height: 200px;
  max-height: 250px;
  background: rgba(0, 0, 0, 0.05);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}
.banner-img {
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.banner-text {
  width: 50%;
  padding: 20px;
  min-height: inherit;
  line-height: 1.5;
}
</style>