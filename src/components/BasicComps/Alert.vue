<template>
  <div class="alert">
    {{alertMessage}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: { allertMessage: String },
};
</script>

<style scoped>
.alert {
  width: 100%;
  padding: 14px 32px 14px 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-family: inherit;
  font-weight: 400;
  font-style: normal;
  color: var(--text);
  background: var(--white);
}
</style>