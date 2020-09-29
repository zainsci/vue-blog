<template>
  <container>
    <div class="author">
      <div class="author-img">
        <img :src="author.img" :alt="author.name" />
      </div>
      <div class="author-meta">
        <div class="author-name">
          <h1>{{ author.name }}</h1>
        </div>
        <div class="author-description">
          <h4>{{ author.username }}</h4>
          <h4>{{ author.email }}</h4>
          <p>
            {{ author.about }}
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
      author: {},
      id: this.$route.params.id,
    };
  },
  created() {
    fetch("http://jsonplaceholder.typicode.com/users/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((author) => {
          if (author.id == this.id) {
            this.author = author;
          } else {
            this.author = {
              name: "Not Found",
            };
          }
        });
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