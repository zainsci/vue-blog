<template>
  <div class="latest">
    <header>
      <span>Don't</span>
      Miss
    </header>
    <ul>
      <li v-for="every in latest" :key="every.id">
        <div class="latest-img">
          <img src="https://picsum.photos/60" alt="" />
        </div>
        <div class="latest-text">
          <div class="latest-title">
            <router-link :to="'/post/' + every.id">{{
              every.title
            }}</router-link>
          </div>
          <div class="latest-meta">
            <a href="#">
              <span class="latest-meta-name">{{ every.author }}</span>
            </a>
            <span class="latest-meta-time">{{ every.date }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "latest-list",
  props: { latest: Array },
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.latest ul li:hover a {
  color: var(--primary);
}
.latest-img {
  min-width: 60px;
  max-width: 60px;
  height: 60px;
  overflow: hidden;
  margin-right: 10px;
  margin-top: 5px;
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