<template>
  <div class="headline">
    <div class="img">
      <img :src="imgSrc" alt="Forest" />
    </div>
    <div class="headline-meta">
      <small>{{tag}}</small>
      <h3>{{title}}</h3>
      <div class="author">
        <a href="/author">
          <div class="author-img">
            <img :src="authImgSrc" alt="Person" />
          </div>
          <div class="author-meta">
            <div class="name">{{author}}</div>
            <div class="time">{{time}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: {
    tag: String,
    title: String,
    author: String,
    time: String,
    imgSrc: String,
    authImgSrc: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.headline {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  display: flex;
  transition: 0.25s;
}
.headline:hover {
  transform: translateY(-5px);
}

/* Headline Image */
.img {
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
}
.img img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}

/* Headline Meta */
.headline-meta {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 10px;
}

/* Headline */
small {
  font-size: 12px;
  margin-bottom: 10px;
}
h3 {
  font-size: 16px;
  margin-bottom: 15px;
  flex: 1;
}

/* Healine Author */
.author a {
  text-decoration: none;
  padding: 8px;
  display: flex;
  border-radius: 10px;
}
.author a:hover {
  background-color: #eee;
}
.author-meta {
  padding: 4px 0;
}
.name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 2px;
}
.time {
  font-size: 10px;
  color: #999;
}
.author-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
}
.author-img img {
  max-height: 100%;
  object-fit: cover;
}
</style>