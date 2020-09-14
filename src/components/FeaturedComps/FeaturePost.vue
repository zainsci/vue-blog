<template>
  <div class="feature-post">
    <div class="feature-title">
      <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
    </div>
    <div class="feature-auth">
      <span>
        <a href="#">Zain Ansari</a>
      </span> · Sep 14, 2020
    </div>
    <div class="feature-img">
      <img src="https://images.unsplash.com/photo-1599930621917-b22b8d5ab1c2?w=1054" alt="Valley" />
    </div>
    <div class="feature-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias quae culpa, cupiditate vero id!...</p>
      <a href="#">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturePost",
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