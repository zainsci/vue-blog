<template>
  <container>
    <div class="author">
      <div class="author-img">
        <img :src="author.img" :alt="author.name" width="150px" />
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
  mounted() {
    fetch(
      `https://raw.githubusercontent.com/zainsci/Blog/master/src/data/Authors/${this.id}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        this.author = data;
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
  min-width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 40px;
}

@media (max-width: 770px) {
  .author {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
  }
  .author-img {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>