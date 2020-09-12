<template>
  <Container>
    <header>
      <div
        class="latest-post"
        style="background-image: url('https://images.unsplash.com/photo-1599811392833-a39014faf967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
      >
        <a href="#">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
            ut porro aut asperiores temporibus in!
          </h1>
        </a>
      </div>
      <div class="popular-posts">
        <div
          class="popular"
          style="background-image: url('https://images.unsplash.com/photo-1599820992361-9301b1dfcb15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=619&q=80')"
        >
          <a href="#">
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!
            </h4>
          </a>
        </div>
        <div
          class="popular"
          style="background-image: url('https://images.unsplash.com/photo-1599780930444-b84affddf04a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80')"
        >
          <a href="#">
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!
            </h4>
          </a>
        </div>
        <div
          class="popular"
          style="background-image: url('https://images.unsplash.com/photo-1599707163582-648451c35634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80')"
        >
          <a href="#">
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!
            </h4>
          </a>
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
* {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
a:hover {
  background-color: rgba(0, 50, 73, 0.4);
}

/* Header or Main Posts */
header {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Latest Post */
.latest-post {
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.15s ease-in;
}
.latest-post:hover {
  transform: translateY(-5px);
}
.latest-post a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}
.latest-post h1 {
  width: fit-content;
  height: fit-content;
  padding: 15px;
  background-color: var(--secondary);
  color: var(--white);
}

/* Popular Posts */
.popular-posts {
  height: 200px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.popular {
  height: 100%;
  transition: 0.15s ease-in;
}
.popular:hover {
  transform: translateY(-5px);
}
.popular h4 {
  width: 100%;
  height: fit-content;
  background-color: var(--secondary);
  padding: 10px;
  color: var(--white);
}

/* Media Queries For Latest Posts */
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
