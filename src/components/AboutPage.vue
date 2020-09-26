<template>
  <container>
    <div class="about-img">
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=2500"
        alt="Mountains"
      />
    </div>
    <div class="about">
      <h1>
        About Us.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit
        labore mollitia nam cum officiis.
      </p>
      <Button />
    </div>
  </container>
</template>

<script>
import container from "./Utils/Container.vue";
import Button from "./Components/Button.vue";
export default {
  name: "about-page",
  components: {
    container,
    Button,
  },
};
</script>

<style scoped></style>
