<template>
  <section>
    <BaseContainer>
      <div class="jumbotron">
        <div class="featured">
          <FeaturePost />
          <FeaturePost />
          <FeaturePost />
          <FeaturePost />
        </div>
        <LatestPosts />
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import FeaturePost from "./FeaturedComps/FeaturePost.vue";
import LatestPosts from "./FeaturedComps/LatestPosts.vue";

export default {
  name: "FeaturedArticles",
  components: { BaseContainer, FeaturePost, LatestPosts },
  props: {},
};
</script>

<style scoped>
section {
  width: 100%;
  background-color: #eee;
  margin-top: 60px;
}
.jumbotron {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  padding: 60px 0;
}

.featured {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

@media (max-width: 990px) {
  .featured {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 710px) {
  .jumbotron {
    padding: 60px;
    grid-template-columns: 1fr;
  }
}
</style>