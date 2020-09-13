<template>
  <BaseContainer>
    <section>
      <div class="posts-column">
        <div class="post-thumb">
          <div class="post-author">
            <div class="author-img">
              <img
                src="https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?w=500"
                alt="Car"
              />
            </div>
            <div class="author-meta">
              <div class="author-name">Zain Shabbir</div>
              <div class="submit-time">Sep 13 · 10 Min Read</div>
            </div>
          </div>
          <div class="post-img">
            <img src="https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?w=500" alt />
          </div>
          <div class="post-meta">
            <div
              class="post-title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laboriosam?</div>
          </div>
          <div class="post-feedback">
            <div class="like">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-heart"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </div>
            <div class="bookmark">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-bookmark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="popular-column"></div>
    </section>
  </BaseContainer>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";

export default {
  name: "BaseSection",
  components: {
    BaseContainer,
  },
};
</script>

<style scoped>
/* Posts and Popular Column */
section {
  min-height: 100% !important;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 300px;
  margin-top: 40px;
}
.posts-column {
  width: 100%;
  height: 100%;
  grid-column: 1/2;
}
.popular-column {
  width: 100%;
  height: 100%;
  grid-column: 2/3;
}

/* Posts Thumbnail */
.post-thumb {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-bottom: 30px;
}

/* Posts Author */
.post-author {
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