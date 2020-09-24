<template>
  <div class="feature-post">
    <div class="feature-title">
      <a href="#">{{ feature.title }}</a>
    </div>
    <div class="feature-auth">
      <span>
        <a href="#">{{ feature.author }}</a>
      </span>
      · {{ feature.date }}
    </div>
    <div class="feature-img">
      <img :src="feature.imgSrc" :alt="feature.imgAlt" />
    </div>
    <div class="feature-content">
      <p>{{ feature.content }}...</p>
      <a href="#">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature-post",
  props: {
    feature: Object,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--text);
}
.feature-post:hover a {
  color: var(--primary);
}
.feature-post {
  padding: 20px;
  margin: 20px auto;
  background-color: var(--white);
  transition: var(--primary-trans);
}
.feature-post:hover {
  transform: translateY(-5px);
  -webkit-box-shadow: var(--primary-box-shadow);
  -moz-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
}

.feature-auth {
  margin-bottom: 20px;
  font-size: 12px;
}
.feature-auth span {
  font-weight: 600;
}
.feature-img {
  width: 100%;
  max-height: 220px;
  overflow: hidden;
  margin-bottom: 10px;
}
.feature-title {
  color: var(--text);
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
}
.feature-content p {
  margin-bottom: 10px;
}
</style>