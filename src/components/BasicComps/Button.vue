<template>
  <div class="button">
    <button>{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: String,
  },
};
</script>

<style scoped>
.button button {
  padding: 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
}
</style>