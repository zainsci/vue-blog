<template>
  <Container>
    <header>
      <div
        class="latest-post"
        style="
          background-image: url('https://images.unsplash.com/photo-1551717309-88444dbe54f5?w=1050');
        "
      >
        <a href="#">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, ut porro aut asperiores temporibus in!
          </h1>
        </a>
      </div>
      <div class="popular-posts">
        <TheHeaderPopPost
          heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!"
          imgSrc="https://images.unsplash.com/photo-1599694486513-ba57db87925b?w=750"
        />
        <TheHeaderPopPost
          heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!"
          imgSrc="https://images.unsplash.com/photo-1599734699867-92dd706c8c64?w=750"
        />
        <TheHeaderPopPost
          heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              recusandae!"
          imgSrc="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=750"
        />
      </div>
    </header>
  </Container>
</template>

<script>
import Container from "../Utils/Container.vue";
import TheHeaderPopPost from "../TheHeaderComps/TheHeaderPopPost.vue";

export default {
  name: "main-head",
  components: {
    Container,
    TheHeaderPopPost,
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
  -webkit-box-shadow: var(--primary-box-shadow);
  -moz-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
}

/* Header or Main Posts */
header {
  margin: 40px 0;
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
  transition: var(--primary-trans);
}
.latest-post:hover {
  transform: translateY(-5px);
}
.latest-post a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
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
  header {
    padding: 0 20px;
  }
  .latest-post {
    height: 500px;
  }
  .popular-posts {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 250px);
    height: 100%;
  }
  .latest-post a h1 {
    font-size: 24px;
  }
}
</style>
