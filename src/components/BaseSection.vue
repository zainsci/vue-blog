<template>
  <section :style="{backgroundColor: sectionBackColor}"></section>
</template>

<script>
export default {
  name: "BaseSection",
  props: { sectionBackColor: String },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 800px;
}
</style>