<template>
  <div>
    <header>
      <div class="headline">
        <a href="/headline">
          <Headline />
        </a>
      </div>
      <div class="weather"></div>
      <div class="popular-news">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div class="banner"></div>
      <div class="tip"></div>
    </header>
  </div>
</template>

<script>
import Headline from "./header-components/Headline.vue";
import NewsCard from "./header-components/NewsCard.vue";
export default {
  name: "Header",
  components: {
    Headline,
    NewsCard,
  },
  props: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--black-text);
}
header {
  width: 90%;
  height: calc(100vh - 70px);
  margin: auto;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 30px;
}

.headline {
  width: 100%;
  height: 220px;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}
.weather {
  width: 100%;
  grid-column: 4 / 6;
  grid-row: 1 / 3;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}

.popular-news {
  width: 100%;
  height: 100%;
  grid-column: 1 / 6;
  grid-row: 3 /4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  overflow: hidden;
}

.banner {
  width: 100%;
  grid-column: 1 / 5;
  grid-row: 4 / 6;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}

.tip {
  width: 100%;
  grid-column: 5 / 6;
  grid-row: 4 / 6;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}
</style>
