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
      footerPosts: [
        {
          id: 0,
          imgSrc:
            "https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,aspernatur.",
          authorId: 1,
        },
        {
          id: 1,
          imgSrc:
            "https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,aspernatur.",
          authorId: 2,
        },
        {
          id: 2,
          imgSrc:
            "https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,aspernatur.",
          authorId: 3,
        },
        {
          id: 3,
          imgSrc:
            "https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,aspernatur.",
          authorId: 4,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>