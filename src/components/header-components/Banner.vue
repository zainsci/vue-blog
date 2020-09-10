<template>
  <div class="banner">
    <div class="banner-img" :style="'background-image: url('+ imgSrc + ')'">
      <div class="banner-tag">Featured</div>
      <h3>{{bannerTitle}}</h3>
      <p>{{bannerContent}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    imgSrc: String,
    bannerTag: String,
    bannerTitle: String,
    bannerContent: String,
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  transition: 0.25s;
}
.banner:hover {
  transform: translateY(-5px);
}
.banner-img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner-img::after {
  position: absolute;
  top: 10px;
  left: 10px;
  content: "";
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-color: black;
  border-radius: 10px;
  opacity: 0.35;
  z-index: 1;
}
.banner-tag {
  padding: 8px 12px;
  background-color: var(--purple);
  border-radius: 5px;
  width: fit-content;
  color: white;
  font-weight: bold;
  z-index: 10;
}
h3 {
  color: white;
  z-index: 10;
}
p {
  color: white;
  z-index: 10;
}
</style>