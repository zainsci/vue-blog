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
        <a href="/popnews01">
          <NewsCard
            imgSrc="https://images.unsplash.com/photo-1599603678052-41eb1600d970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            newsLine="Travel To Yosemite National Park"
            newsViews="12.3 k"
          />
        </a>
        <a href="/popnews02">
          <NewsCard
            imgSrc="https://images.unsplash.com/photo-1599608782607-987461ec6577?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            newsLine="Travel To Switzerland"
            newsViews="45.5 k"
          />
        </a>
        <a href="/popnews03">
          <NewsCard
            imgSrc="https://images.unsplash.com/photo-1599606464354-8324d37efb6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            newsLine="Travel To Great Wall Of China"
            newsViews="45.6 k"
          />
        </a>
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
  grid-gap: 20px;
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
  height: 110px;
  padding-top: 10px;
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
