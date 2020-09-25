<template>
  <container>
    <a href="#">
      <div class="banner">
        <div
          class="banner-image"
          :style="
            'height:' +
              bannerHeight +
              ';background-image:url(' +
              bannerImg +
              ')'
          "
        >
          <div class="base-banner-title">Lorem ipsum dolor sit amet</div>
          <div class="base-banner-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            reiciendis,
          </div>
        </div>
      </div>
    </a>
  </container>
</template>

<script>
import Container from "../Utils/Container.vue";
export default {
  name: "ad-banner",
  components: { Container },
  props: {
    bannerHeight: String,
    bannerImg: String,
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  background-color: var(--white);
  -webkit-box-shadow: var(--primary-box-shadow);
  -moz-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
  padding: 10px;
  transition: var(--primary-trans);
  position: relative;
}
.banner::before {
  content: "";
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}

.banner-image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 101;
}

.base-banner-title {
  position: relative;
  z-index: 105;
  padding: 40px 40px 10px 40px;
  font-size: 24px;
  font-weight: 600;
}
.base-banner-content {
  position: relative;
  z-index: 105;
  padding: 0px 40px;
}
a {
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
}
a:hover .banner {
  transform: translateY(-5px);
  -webkit-box-shadow: var(--primary-box-shadow);
  -moz-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
}
</style>
