<template>
  <container>
    <div class="post">
      <div class="post-image">
        <img :src="postHeaderImg" alt="Image" />
      </div>
      <header class="post-header">
        <h1>{{ body.title }}</h1>
      </header>
      <main class="post-body">
        <p>{{ body.body }}</p>
      </main>
      <footer class="post-footer">
        <div class="newsletter">
          <h2>
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-envelope"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                />
              </svg>
            </span>
            Sign Up for Weekly Newsletter.
          </h2>
          <p>Get the best from us right in your inbox.</p>
          <form action="#">
            <input type="email" name="newsletter-email" id="newsletter-email" />
            <button>Get This Newsletter</button>
          </form>
          <small>
            By signing up, you will create a BLOG. account if you don’t already
            have one. Review our
            <a href="#">Privacy Policy</a> for more information about our
            privacy practices.
          </small>
        </div>
        <div class="author">
          <div
            class="author-img"
            :style="'background-image: url(' + authorImg + ')'"
          ></div>
          <div class="author-meta">
            <div class="author-name">
              <a href="#">
                <h3>Arthur Schopenhaeur</h3>
              </a>
            </div>
            <div class="author-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, libero!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </container>
</template>

<script>
import Container from "./Utils/Container.vue";

export default {
  name: "post-page",
  components: {
    Container,
  },
  props: {},
  data() {
    return {
      postHeaderImg:
        "https://images.unsplash.com/photo-1600998837340-4887228e311f?&w=1500",
      authorImg:
        "https://images.unsplash.com/photo-1601002719958-565666329717?w=750",
      id: this.$route.params.id,
      body: {},
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.body = data;
      });
  },
};
</script>

<style scoped>
.post {
  width: 100%;
  height: 100%;
  max-width: 680px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--text);
}
main {
  height: 100%;
  width: 100%;
}

/* Post Header with Image And Title */
.post-image {
  width: 100%;
  height: 100%;
  max-height: 350px;
  margin-bottom: 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: flex;
}

.post-header h1 {
  font-size: 36px !important;
  line-height: 50px !important;
  font-style: normal !important;
}

/* Post Body with Contnet */
.post-body p {
  font-size: 21px;
  line-height: 32px;
  margin-top: 32px;
}
.post-footer {
  margin-top: 32px;
}

/* NewsLetter */
.newsletter {
  max-width: 680px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 30px;
  border-top: 3px solid var(--primary);
  background-color: #eee;
}
.newsletter h2 span {
  height: 28px;
  margin-right: 10px;
}
.newsletter h2 {
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newsletter p {
  font-size: 16px;
  margin-top: 15px;
}
.newsletter form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 15px 0;
}

.newsletter form input {
  width: 60%;
  border: none;
  border-bottom: 1px solid #999;
  padding: 8px 12px;
  color: var(--text);
  background-color: #eee;
}
.newsletter form input:focus {
  outline: none;
}

.newsletter form button {
  width: 30%;
  margin-left: auto;
  padding: 12px 18px;
  background-color: var(--primary);
  color: var(--white);
  border: 1px solid var(--primary);
  border-radius: 6px;
}
.newsletter form button:focus {
  outline: none;
  border: 2px solid var(--secondary);
}

.newsletter small {
  font-size: 12px;
  color: #999;
  margin-top: 15px;
}

/* Author Details Card */
.author {
  width: 100%;
  height: 160px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.author-img {
  min-width: 100px;
  min-height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin-right: 20px;
}

.author-meta {
  width: 100%;
}
.author-name {
  margin-bottom: 10px;
}

/* Media Queries */
@media (max-width: 750px) {
  .post-header h1 {
    font-size: 34px !important;
    line-height: 42px !important;
    font-style: normal !important;
  }
  .post {
    padding: 0 20px;
  }
  .post p {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
