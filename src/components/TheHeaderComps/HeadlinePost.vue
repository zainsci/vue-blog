<template>
  <div class="popular" :style="'background-image: url(' + imgSrc + ')'">
    <router-link to="/post/2">
      <h4>{{ heading }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "headline-post",
  props: {
    heading: String,
    imgSrc: String,
  },
};
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
a:hover {
  background-color: rgba(0, 50, 73, 0.4);
  -webkit-box-shadow: var(--primary-box-shadow);
  -moz-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
}
/* Popular Posts */
.popular {
  height: 100%;
  transition: var(--primary-trans);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.popular:hover {
  transform: translateY(-5px);
}
.popular h4 {
  width: 100%;
  height: fit-content;
  background-color: var(--secondary);
  padding: 10px;
  color: var(--white);
  font-weight: 400;
}
</style>