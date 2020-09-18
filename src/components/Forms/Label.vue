<template>
  <label>{{ label }}</label>
</template>

<script>
export default {
  name: "Label",
  props: { label: String },
};
</script>

<style scoped>
label {
  display: inline-block;
  margin-bottom: 8px;
}
</style>
