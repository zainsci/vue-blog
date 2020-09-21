<template>
  <div class="progress">
    <div class="progress-bar"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>

<style scoped>
.progress {
  display: flex;
  height: 12px;
  overflow: hidden;
  font-size: 12px;
  background-color: var(--white);
  border-radius: var(--primary-radius);
}
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--white);
  text-align: center;
  white-space: nowrap;
  background-color: var(--primary);
  transition: width 0.6s ease;
}
</style>