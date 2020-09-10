<template>
  <div>
    <header>
      <div class="headline">
        <a href="/headline">
          <Headline
            tag="Architecture"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime voluptates obcaecati facere quia?"
            author="Zain Shabbir"
            time="September 9, 2020"
            authImgSrc="https://images.unsplash.com/photo-1599601074719-06d93ba4c694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            imgSrc="https://images.unsplash.com/photo-1599593054067-ebf22632bdb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </a>
      </div>
      <div class="weather">
        <Weather />
      </div>
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
      <div class="banner">
        <a href="/banner">
          <Banner
            imgSrc="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            bannerTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ullam asperiores repellendus ex, quis officiis magnam "
            bannerContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium ."
          />
        </a>
      </div>
      <div class="tip"></div>
    </header>
  </div>
</template>

<script>
import Headline from "./header-components/Headline.vue";
import NewsCard from "./header-components/NewsCard.vue";
import Banner from "./header-components/Banner.vue";
import Weather from "./header-components/Weather.vue";

export default {
  name: "Header",
  components: {
    Headline,
    Weather,
    NewsCard,
    Banner,
  },
  props: {},
};
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--black-text);
}
header {
  width: 90%;
  height: calc(100% - 70px);
  margin: auto;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;
}

.headline {
  width: 100%;
  height: 240px;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}
.weather {
  width: 100%;
  height: 240px;
  grid-column: 4 / 6;
  grid-row: 1 / 3;
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
