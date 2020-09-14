<template>
  <section>
    <BaseContainer>
      <div class="jumbotron">
        <div class="featured">
          <div class="feature-post">
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div
              class="feature-title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam?</div>
          </div>
          <div class="feature-post">
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div
              class="feature-title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam?</div>
          </div>
          <div class="feature-post">
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div
              class="feature-title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam?</div>
          </div>
          <div class="feature-post">
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div
              class="feature-title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam?</div>
          </div>
        </div>
        <div class="latest">
          <ul>
            <li>
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
export default {
  name: "FeaturedArticles",
  components: { BaseContainer },
  props: {},
};
</script>

<style scoped>
section {
  width: 100%;
  background-color: var(--dark);
  margin-top: 60px;
}
.jumbotron {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 60px 0;
}

.featured {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.feature-post {
  padding: 10px;
  margin: 20px auto;
}
.feature-img {
  width: 100%;
  max-height: 220px;
  overflow: hidden;
  margin-bottom: 10px;
}
.feature-title {
  color: var(--white);
  font-size: 24px;
}

.latest {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.latest ul {
  list-style: none;
}
.latest ul li {
  height: 100px;
  padding: 18px 12px;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: var(--white);
  font-size: 24px;
}
</style>