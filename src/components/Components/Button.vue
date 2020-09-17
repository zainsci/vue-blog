<template>
  <div class="button">
    <button :style="'background-color: ' + btnColor">{{ btnText }}</button>
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
  padding: 8px 12px;
  border: var(--primary-border);
  border-radius: 4px;
  background-color: var(--white);
  color: var(--text);
  font-size: 16px;
  font-family: inherit;
  appearance: none;
}

.button button:hover {
  background-color: var(--primary);
  color: var(--white);
  border-color: var(--primary);
  font-weight: 600;
}
</style>
