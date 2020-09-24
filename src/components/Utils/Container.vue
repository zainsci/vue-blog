<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "container",
};
</script>

<style scoped>
.container {
  width: 1140px;
  height: 100%;
  margin: auto;
}

@media (max-width: 576px) {
  .container {
    width: 100%;
    margin: auto;
  }
}

@media (min-width: 576px) {
  .container {
    width: 100%;
    margin: auto;
  }
}

@media (min-width: 768px) {
  .container {
    width: 720px;
    margin: auto;
  }
}

@media (min-width: 992px) {
  .container {
    width: 960px;
    margin: auto;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1140px;
    margin: auto;
  }
}
</style>