<template>
  <div>
    <Container>
      <main>
        <div class="banner">
          <a href="#">
            <Banner
              imgSrc="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              bannerTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ullam asperiores repellendus ex, quis officiis magnam "
              bannerContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium ."
            />
          </a>
        </div>
      </main>
    </Container>
  </div>
</template>

<script>
import Container from "./Container.vue";
import Banner from "./header-components/Banner.vue";

export default {
  name: "Header",
  components: {
    Container,
    Banner,
  },
  props: {},
};
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--black-text);
}
main {
  width: 100%;
}
</style>
