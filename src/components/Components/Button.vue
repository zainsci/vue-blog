<template>
  <div class="button">
    <button :style="'background-color: ' + btnColor">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: String,
    btnColor: String,
  },
};
</script>

<style scoped>
.button button {
  padding: 12px 18px;
  border: var(--primary-border);
  background-color: var(--white);
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
}
</style>