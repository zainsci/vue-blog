<template>
  <container>
    <div class="author">
      <div class="author-img">
        <img
          src="https://images.unsplash.com/photo-1600518225509-72061d915f4d?w=1500"
          alt="Painting"
        />
      </div>
      <div class="author-meta">
        <div class="author-name">
          <h1>{{ user.name }}</h1>
        </div>
        <div class="author-description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            explicabo.
          </p>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Container from "../Utils/Container.vue";
export default {
  name: "author",
  components: { Container },
  data() {
    return {
      user: {},
      userId: this.$route.params.id,
    };
  },
  created() {
    fetch("http://jsonplaceholder.typicode.com/users/" + this.userId)
      .then((res) => res.json())
      .then((data) => {
        this.user = data;
      });
  },
};
</script>

<style scoped>
.author {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0;
}
.author-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 40px;
}
</style>