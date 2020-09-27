<template>
  <main>
    <main-head />
    <ad-banner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <featured-articles />
  </main>
</template>

<script>
import MainHead from "./HomePage/MainHead.vue";
import AdBanner from "./HomePage/AdBanner.vue";
import FeaturedArticles from "./HomePage/FeaturedArticles.vue";

export default {
  name: "home-page",
  props: {},
  components: {
    MainHead,
    AdBanner,
    FeaturedArticles,
  },
};
</script>

<style scoped>
</style>