<template>
  <main>
    <head-posts />
    <ad-banner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <featured-articles />
  </main>
</template>

<script>
import HeadPosts from "../Posts/HeadPosts.vue";
import AdBanner from "../Others/AdBanner.vue";
import FeaturedArticles from "../Pages/FeaturedArticles.vue";

export default {
  name: "home-page",
  props: {},
  components: {
    HeadPosts,
    AdBanner,
    FeaturedArticles,
  },
};
</script>

<style scoped>
</style>