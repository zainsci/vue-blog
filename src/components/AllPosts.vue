<template>
  <BaseContainer>
    <section>
      <div class="posts-column">
        <UserPost :Posts="posts" />
      </div>
      <div class="popular-column"></div>
    </section>
  </BaseContainer>
</template>

<script>
import BaseContainer from "./Utils/BaseContainer.vue";
import UserPost from "./BaseSectionComps/UserPost.vue";

export default {
  name: "BaseUserPosts",
  components: {
    BaseContainer,
    UserPost,
  },
  data() {
    return {
      posts: [
        {
          key: 1,
          authorName: "Socrates",
          date: "13 Sep",
          readTime: "5 Min",
          authImg:
            "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=500",
          authImgAlt: "Computer",
          postImg:
            "https://images.unsplash.com/photo-1599918350363-44f621829253?w=1046",
          postImgAlt: "Post Image Here",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 2,
          authorName: "Plato",
          date: "12 Sep",
          readTime: "10 Min",
          authImg:
            "https://images.unsplash.com/photo-1538652116325-8f5fa30fefff?w=500",
          authImgAlt: "Computer",
          postImg:
            "https://images.unsplash.com/photo-1599927260303-ea937f6a1beb?w=1046",
          postImgAlt: "Post Image Here",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 3,
          authorName: "Aristotle",
          date: "11 Sep",
          readTime: "15 Min",
          authImg:
            "https://images.unsplash.com/photo-1529767203443-a617595c8825?w=500",
          authImgAlt: "Computer",
          postImg:
            "https://images.unsplash.com/photo-1592112500306-32f94fd365b4?w=1046",
          postImgAlt: "Post Image Here",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 4,
          authorName: "Nietzsche",
          date: "10 Sep",
          readTime: "15 Min",
          authImg:
            "https://images.unsplash.com/photo-1529338296731-c4280a44fc48?w=500",
          authImgAlt: "Computer",
          postImg:
            "https://images.unsplash.com/photo-1584649143797-0e91c27b7847?w=1046",
          postImgAlt: "Post Image Here",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 5,
          authorName: "Schopenhaeur",
          date: "09 Sep",
          readTime: "20 Min",
          authImg:
            "https://images.unsplash.com/photo-1597514110707-b988d3a08652?w=500",
          authImgAlt: "Computer",
          postImg:
            "https://images.unsplash.com/photo-1584596959401-18872e9ccdd3?w=1046",
          postImgAlt: "Post Image Here",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Posts and Popular Column */
section {
  min-height: 100% !important;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 400px;
  margin-top: 40px;
}
.posts-column {
  width: 100%;
  height: 100%;
  grid-column: 1/2;
}
.popular-column {
  width: 100%;
  height: 100%;
  grid-column: 2/3;
}

a {
  width: 100%;
  height: 100%;
  color: var(--text);
  text-decoration: none;
  transition: 0.15 ease-in;
}
</style>