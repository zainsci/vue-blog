<template>
  <main>
    <head-posts />
    <ad-banner
      bannerHeight="150px"
      bannerImg="https://images.unsplash.com/photo-1599904182194-d519a3268229?w=1229"
    />
    <featured-articles />
    <paid-banner />
    <tag-cloud />
    <footer-posts :footerPosts="footerPosts" />
  </main>
</template>

<script>
import HeadPosts from "../Posts/HeadPosts.vue";
import AdBanner from "../Others/AdBanner.vue";
import FeaturedArticles from "../Pages/FeaturedArticles.vue";
import PaidBanner from "../Others/PaidBanner.vue";
import TagCloud from "../Others/TagCloud.vue";
import FooterPosts from "../Posts/FooterPosts.vue";

export default {
  name: "home-page",
  props: {},
  components: {
    HeadPosts,
    AdBanner,
    FeaturedArticles,
    PaidBanner,
    TagCloud,
    FooterPosts,
  },
  data() {
    return {
      footerPosts: [],
    };
  },
  created() {
    fetch(
      "https://raw.githubusercontent.com/zainsci/Blog/master/src/data/Posts/All.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 3; i < 7; i++) {
          this.footerPosts.push(data[i]);
        }
      });
  },
};
</script>

<style scoped>
</style>