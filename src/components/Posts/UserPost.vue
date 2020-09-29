<template>
  <div class="post">
    <div class="post-thumb" v-for="post in Posts" :key="post.key">
      <div class="post-author">
        <a href="#">
          <div class="author-img">
            <img :src="post.authImg" :alt="post.authImgAlt" />
          </div>
          <div class="author-meta">
            <div class="author-name">{{ post.authorName }}</div>
            <div class="submit-time">{{ post.date }} · {{ post.readTime }}</div>
          </div>
        </a>
      </div>
      <div class="post-img">
        <img :src="post.postImg" :alt="post.postImgAlt" />
      </div>
      <div class="post-meta">
        <div class="post-title">
          <a href="#">{{ post.postTitle }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-post",
  props: {
    Posts: Array,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--text);
}
.post {
  width: 100%;
  height: 100%;
}

/* Posts Thumbnail */
.post-thumb {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border: 1px solid #eee;
  margin-bottom: 30px;
  transition: var(--primary-trans);
}
.post-thumb:hover {
  transform: translateY(-5px);
  -webkit-box-shadow: var(--primary-box-shadow);
  -moz-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
}
.post-thumb:hover a {
  color: var(--primary);
}

/* Posts Author */
.post-author a {
  height: 80px;
  display: flex;
  padding: 10px;
}
.author-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;
}
.author-meta {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.author-name {
  font-weight: 600;
  margin-bottom: 8px;
}
.submit-time {
  font-size: 12px;
}

/* Posts image */
.post-img {
  width: 100%;
  height: 180px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

/* Posts Title */
.post-meta {
  width: 100%;
  font-size: 32px;
  padding: 10px 0;
  font-weight: 600;
}

/* Posts Feedback */
.post-feedback {
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  font-size: 24px;
  color: var(--primary);
}
</style>