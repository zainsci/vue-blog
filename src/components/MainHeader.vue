<template>
  <Container>
    <header>
      <div
        class="latest-post"
        style="background-image: url('https://images.unsplash.com/photo-1551717309-88444dbe54f5?w=1050')"
      >
        <a href="#">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
            ut porro aut asperiores temporibus in!
          </h1>
        </a>
      </div>
      <div class="popular-posts">
        <PopularPost
          heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!"
          imgSrc="https://images.unsplash.com/photo-1599694486513-ba57db87925b?w=750"
        />
        <PopularPost
          heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!"
          imgSrc="https://images.unsplash.com/photo-1599734699867-92dd706c8c64?w=750"
        />
        <PopularPost
          heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!"
          imgSrc="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=750"
        />
      </div>
    </header>
  </Container>
</template>

<script>
import Container from "./Container.vue";
import PopularPost from "./SubMainHeader/PopularPost.vue";

export default {
  name: "MainHeader",
  components: {
    Container,
    PopularPost,
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
  font-family: "Merriweather Sans", sans-serif;
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
