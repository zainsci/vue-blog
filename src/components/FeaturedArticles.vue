<template>
  <section>
    <BaseContainer>
      <div class="jumbotron">
        <div class="featured">
          <div v-for="feature in features" :key="feature.key">
            <FeaturePost :feature="feature" />
          </div>
        </div>
        <LatestPosts :latest="latest" />
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
  data() {
    return {
      features: [
        {
          key: 0,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Aristotle",
          date: "Sep 14, 2020",
          imgSrc:
            "https://images.unsplash.com/photo-1581492743307-7ad0f4154362?w=1054",
          imgAlt: "Mountain Landscape",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          key: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Aristotle",
          date: "Sep 14, 2020",
          imgSrc:
            "https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054",
          imgAlt: "Mountain Landscape",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          key: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Aristotle",
          date: "Sep 14, 2020",
          imgSrc:
            "https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?w=1054",
          imgAlt: "Mountain Landscape",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          key: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Aristotle",
          date: "Sep 14, 2020",
          imgSrc:
            "https://images.unsplash.com/photo-1591014618274-5a62c88ddc73?w=1054",
          imgAlt: "Mountain Landscape",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
      ],
      latest: [
        {
          key: 0,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 5,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 6,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 7,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 8,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          key: 9,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
      ],
    };
  },
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