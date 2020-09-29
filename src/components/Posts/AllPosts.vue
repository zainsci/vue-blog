<template>
  <container>
    <section>
      <div class="posts-column">
        <UserPost :Posts="Posts" />
      </div>
      <div class="popular-column"></div>
    </section>
  </container>
</template>

<script>
import Container from "../Utils/Container.vue";
import UserPost from "./UserPost.vue";

export default {
  name: "all-posts",
  components: {
    Container,
    UserPost,
  },
  data() {
    return {
      Posts: [],
    };
  },
  beforeCreate() {
    fetch(
      "https://raw.githubusercontent.com/zainsci/Blog/master/src/data/Posts/All.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.Posts = data;
      });
  },
};
</script>

<style scoped>
/* Posts and Popular Column */
section {
  min-height: 100% !important;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 400px;
  margin-top: 40px;
}
.posts-column {
  width: 100%;
  height: 100%;
  grid-column: 1/2;
}
.popular-column {
  width: 100%;
  height: 100%;
  grid-column: 2/3;
}

a {
  width: 100%;
  height: 100%;
  color: var(--text);
  text-decoration: none;
  transition: 0.15 ease-in;
}
</style>