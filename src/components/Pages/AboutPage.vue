<template>
  <div
    class="about"
    style="
      background-image: url('https://images.unsplash.com/photo-1450873622936-c13d06e998e5?w=2500');
    "
  >
    <container>
      <div class="about-text">
        <h1>About Us.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          suscipit labore mollitia nam cum officiis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vel ab, hic animi odit consequuntur
          impedit, autem dolores quam, ipsum reiciendis laborum tempore dolor
          eius minus aspernatur consectetur tempora molestias. Rem ut blanditiis
          temporibus impedit porro perferendis soluta asperiores debitis aut
          quaerat? Expedita doloribus debitis quae quisquam vitae ducimus?
          Placeat, laboriosam.
        </p>
        <router-link to="/contact"><Button btnText="Contact" /></router-link>
      </div>
    </container>
  </div>
</template>

<script>
import container from "../Utils/Container.vue";
import Button from "../BasicComponents/Components/Button.vue";
export default {
  name: "about-page",
  components: {
    container,
    Button,
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  height: calc(100vh - 70px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0;
}
.about-text {
  width: 50%;
  min-width: 400px;
}
h1 {
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 40px;
  border-bottom: 5px solid var(--primary);
  width: fit-content;
}
p {
  margin-bottom: 40px;
  line-height: 1.5;
  font-weight: 600;
}

@media (max-width: 768px) {
  .about-text {
    width: 100%;
    padding: 20px;
    min-width: 350px;
  }
}
</style>
