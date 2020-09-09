<template>
  <div class="card">
    <div class="card-img">
      <div class="inner-overflow">
        <img :src="imgSrc" alt />
      </div>
    </div>
    <div class="card-meta">
      <div class="watch-no">
        <small>{{newsViews}}</small>
      </div>
      <h5>{{newsLine}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    imgSrc: String,
    newsViews: String,
    newsLine: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  transition: 0.25s;
}
.card:hover {
  transform: translateY(-5px);
}
.card-img {
  width: 50%;
  height: 80px;
  max-height: 200px;
  border-radius: 10px;
  overflow: hidden;
}
.inner-overflow {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card-img img {
  max-width: 100%;
  object-fit: contain;
}

.card-meta {
  width: 50%;
  margin-left: 10px;
}
.card-meta .watch-no {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  margin-bottom: 10px;
}
.card-meta h5 {
  font-size: 12px;
}
</style>