<template>
  <main>
    <TheHeader />
    <BaseAdBanner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <FeaturedArticles />
  </main>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import BaseAdBanner from "./BaseAdBanner.vue";
import FeaturedArticles from "./FeaturedArticles.vue";

export default {
  name: "HomePage",
  props: {},
  components: {
    TheHeader,
    BaseAdBanner,
    FeaturedArticles,
  },
};
</script>

<style scoped>
</style>