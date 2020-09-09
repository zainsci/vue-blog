<template>
  <div class="headline">
    <div class="img">
      <img :src="imgSrc" alt="Forest" />
    </div>
    <div class="headline-meta">
      <small>Architecture</small>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime voluptates obcaecati facere quia esse harum fugit animi dolore perferendis?</h3>
      <div class="author">
        <a href="/author">
          <div class="author-img">
            <img
              src="https://images.unsplash.com/photo-1599601074719-06d93ba4c694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Person"
            />
          </div>
          <div class="author-meta">
            <div class="name">Zain Shabbir</div>
            <div class="time">September 9, 2020</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      imgSrc:
        "https://images.unsplash.com/photo-1599593054067-ebf22632bdb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    };
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