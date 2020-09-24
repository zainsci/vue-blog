<template>
  <main>
    <TheHeader />
    <AdBanner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <FeaturedArticles />
  </main>
</template>

<script>
import TheHeader from "./HomePage/TheHeader.vue";
import AdBanner from "./HomePage/AdBanner.vue";
import FeaturedArticles from "./HomePage/FeaturedArticles.vue";

export default {
  name: "home-page",
  props: {},
  components: {
    TheHeader,
    AdBanner,
    FeaturedArticles,
  },
};
</script>

<style scoped>
</style>