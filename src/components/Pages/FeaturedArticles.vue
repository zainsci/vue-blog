<template>
  <section>
    <container>
      <div class="jumbotron">
        <div class="featured">
          <div v-for="feature in features" :key="feature.id">
            <feature-post :feature="feature" />
          </div>
        </div>
        <latest-list :latest="latest" />
      </div>
    </container>
  </section>
</template>

<script>
import Container from "../Utils/Container.vue";
import FeaturePost from "../Posts/FeaturePost.vue";
import LatestList from "../Posts/LatestList.vue";

export default {
  name: "featured-articles",
  components: { Container, FeaturePost, LatestList },
  props: {},
  data() {
    return {
      features: [
        {
          id: 0,
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
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 0,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 1,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 2,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 3,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 4,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 5,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 6,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 7,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 8,
          imgSrc: "https://picsum.photos/60",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Socrates",
          date: "Sep 14, 2020",
        },
        {
          id: 9,
          imgSrc: "https://picsum.photos/60",
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
  grid-template-rows: min-content;
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