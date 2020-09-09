<template>
  <div class="card">
    <div class="card-img">
      <div class="inner-overflow">
        <img :src="imgSrc" alt />
      </div>
    </div>
    <div class="card-meta">
      <div class="watch-no"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  data() {
    return {
      imgSrc:
        "https://images.unsplash.com/photo-1599592597811-1877b5902834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
    };
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
</style>