<template>
  <Container>
    <header>
      <div class="latest-post">
        <div
          class="latest-back-img"
          style="background-image: url('https://images.unsplash.com/photo-1599811392833-a39014faf967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
        ></div>
      </div>
      <div class="popular-posts">
        <div class="popular">
          <div
            class="pop-back-img"
            style="background-image: url('https://images.unsplash.com/photo-1599820992361-9301b1dfcb15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=619&q=80')"
          ></div>
        </div>
        <div class="popular">
          <div
            class="pop-back-img"
            style="background-image: url('https://images.unsplash.com/photo-1599780930444-b84affddf04a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80')"
          ></div>
        </div>
        <div class="popular">
          <div
            class="pop-back-img"
            style="background-image: url('https://images.unsplash.com/photo-1599707163582-648451c35634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80')"
          ></div>
        </div>
      </div>
    </header>
  </Container>
</template>

<script>
import Container from "./Container.vue";
export default {
  name: "Header",
  components: {
    Container,
  },
  props: {},
};
</script>

<style scoped>
header {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.latest-post {
  width: 100%;
  height: 400px;
}
.latest-back-img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.popular-posts {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.popular {
  height: 100%;
  width: 100%;
}
.pop-back-img {
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 575px) {
  .latest-post {
    height: 500px;
  }
  .popular-posts {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 250px);
  }
}
</style>