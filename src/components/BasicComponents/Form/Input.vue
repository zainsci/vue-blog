<template>
  <input :type="type" :name="name" :id="id" />
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
    name: String,
    id: String,
  },
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text);
  background-color: var(--white);
  background-clip: padding-box;
  border: var(--primary-border);
  appearance: none;
  border-radius: var(--primary-radius);
  transition: var(--primary-trans);
}

input:focus {
  outline: none;
  border-color: var(--primary);
}
</style>