<template>
  <div class="latest">
    <header>
      <span>Don't</span>
      Miss
    </header>
    <ul>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
      <li>
        <div class="latest-title">
          <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
        </div>
        <div class="latest-meta">
          <span class="latest-meta-name">Zain Ansari</span>
          <span class="latest-meta-time">Sep 14, 2020</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LatestPosts",
  props: {},
};
</script>

<style scoped>
.latest {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.latest a {
  text-decoration: none;
  color: var(--text);
}
.latest header {
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  padding: 10px;
  margin-bottom: 10px;
}
.latest ul {
  list-style: none;
}
.latest ul li {
  min-height: 100px;
  padding: 18px 12px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--text);
}
.latest ul li:hover a {
  color: var(--primary);
}
.latest-title {
  margin-bottom: 10px;
}

.latest-meta {
  font-size: 10px;
}
.latest-meta-name {
  color: var(--text);
  font-weight: 600;
  margin-right: 10px;
}
.latest-meta-time {
  color: var(--text);
}
</style>