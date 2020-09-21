<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Badge",
};
</script>

<style scoped>
.badge {
  background-color: var(--black);
  display: inline-block;
  padding: 0.25em 0.5em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
</style>