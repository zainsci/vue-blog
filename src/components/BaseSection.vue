<template>
  <BaseContainer>
    <section>
      <div class="posts-column">
        <SectionPostThumb :Posts="posts" />
      </div>
      <div class="popular-column"></div>
    </section>
  </BaseContainer>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import SectionPostThumb from "./BaseSectionComps/SectionPostThumb.vue";

export default {
  name: "BaseSection",
  components: {
    BaseContainer,
    SectionPostThumb,
  },
  data() {
    return {
      posts: [
        {
          key: 1,
          authorName: "Zain Shabbir",
          date: "13 Sep",
          readTime: "5 Min",
          authImg:
            "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=500",
          authImgAlt: "Fire Oven",
          postImg:
            "https://images.unsplash.com/photo-1599918350363-44f621829253?w=1046",
          postImgAlt: "Red Padded Chairs Inside Building",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 2,
          authorName: "Zain Shabbir",
          date: "13 Sep",
          readTime: "5 Min",
          authImg:
            "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=500",
          authImgAlt: "Fire Oven",
          postImg:
            "https://images.unsplash.com/photo-1599918350363-44f621829253?w=1046",
          postImgAlt: "Red Padded Chairs Inside Building",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 3,
          authorName: "Zain Shabbir",
          date: "13 Sep",
          readTime: "5 Min",
          authImg:
            "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=500",
          authImgAlt: "Fire Oven",
          postImg:
            "https://images.unsplash.com/photo-1599918350363-44f621829253?w=1046",
          postImgAlt: "Red Padded Chairs Inside Building",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 4,
          authorName: "Zain Shabbir",
          date: "13 Sep",
          readTime: "5 Min",
          authImg:
            "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=500",
          authImgAlt: "Fire Oven",
          postImg:
            "https://images.unsplash.com/photo-1599918350363-44f621829253?w=1046",
          postImgAlt: "Red Padded Chairs Inside Building",
          postTitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti!",
        },
        {
          key: 5,
          authorName: "Zain Shabbir",
          date: "13 Sep",
          readTime: "5 Min",
          authImg:
            "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=500",
          authImgAlt: "Fire Oven",
          postImg:
            "https://images.unsplash.com/photo-1599918350363-44f621829253?w=1046",
          postImgAlt: "Red Padded Chairs Inside Building",
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
  grid-template-columns: 1fr 300px;
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
</style>