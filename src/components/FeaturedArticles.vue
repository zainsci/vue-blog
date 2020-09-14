<template>
  <section>
    <BaseContainer>
      <div class="jumbotron">
        <div class="featured">
          <div class="feature-post">
            <div class="feature-title">
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
            <div class="feature-auth">
              <span>
                <a href="#">Zain Shabbir</a>
              </span> · Sep 14, 2020
            </div>
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div class="feature-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias quae culpa, cupiditate vero id!...</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="feature-post">
            <div class="feature-title">
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
            <div class="feature-auth">
              <span>
                <a href="#">Zain Shabbir</a>
              </span> · Sep 14, 2020
            </div>
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div class="feature-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias quae culpa, cupiditate vero id!...</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="feature-post">
            <div class="feature-title">
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
            <div class="feature-auth">
              <span>
                <a href="#">Zain Shabbir</a>
              </span> · Sep 14, 2020
            </div>
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div class="feature-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias quae culpa, cupiditate vero id!...</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="feature-post">
            <div class="feature-title">
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
            <div class="feature-auth">
              <span>
                <a href="#">Zain Shabbir</a>
              </span> · Sep 14, 2020
            </div>
            <div class="feature-img">
              <img
                src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054"
                alt="Valley"
              />
            </div>
            <div class="feature-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias quae culpa, cupiditate vero id!...</p>
              <a href="#">Read More</a>
            </div>
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
  grid-gap: 20px;
  padding: 60px 0;
}

.featured {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.feature-post {
  padding: 20px;
  margin: 20px auto;
  background-color: var(--white);
}

.feature-auth {
  margin-bottom: 20px;
  font-size: 14px;
}
.feature-auth span {
  font-weight: 600;
}
.feature-img {
  width: 100%;
  max-height: 220px;
  overflow: hidden;
  margin-bottom: 10px;
}
.feature-title {
  color: var(--text);
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
}
.feature-content p {
  margin-bottom: 10px;
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
  color: var(--primary);
}
</style>