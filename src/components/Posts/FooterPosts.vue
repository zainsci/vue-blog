<template>
  <footer>
    <div class="footer-post">
      <a href="#">
        <div class="footer-img">
          <img
            src="https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500"
            alt=""
          />
        </div>

        <div class="footer-post-text">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            aspernatur.
          </h4>
        </div>
      </a>
    </div>
    <div class="footer-post">
      <a href="#">
        <div class="footer-img">
          <img
            src="https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500"
            alt=""
          />
        </div>

        <div class="footer-post-text">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            aspernatur.
          </h4>
        </div>
      </a>
    </div>
    <div class="footer-post">
      <a href="#">
        <div class="footer-img">
          <img
            src="https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500"
            alt=""
          />
        </div>

        <div class="footer-post-text">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            aspernatur.
          </h4>
        </div>
      </a>
    </div>
    <div class="footer-post">
      <a href="#">
        <div class="footer-img">
          <img
            src="https://images.unsplash.com/photo-1601214571524-34e8f3e46cc9?w=1500"
            alt=""
          />
        </div>

        <div class="footer-post-text">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            aspernatur.
          </h4>
        </div>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-posts",
};
</script>

<style scoped>
footer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.footer-post {
  width: 100%;
  height: 100%;
  max-height: 200px;
  overflow: hidden;
  position: relative;
}
a::before {
  content: "";
  background-color: var(--green);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 1;
  transition: 0.1s;
}
a:hover::before {
  opacity: 0.4;
}

.footer-post-text {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: 600;
  color: var(--white);
  font-size: 22px;
  z-index: 5;
}
</style>