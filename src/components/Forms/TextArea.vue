<template>
  <textarea :name="name" :id="id"></textarea>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    name: String,
    id: String,
  },
};
</script>

<style scoped>
textarea {
  display: block;
  width: 100%;
  min-height: 200px;
  margin-bottom: 16px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text);
  background-color: var(--white);
  background-clip: padding-box;
  border: var(--primary-border);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: var(--primary-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: vertical;
}
textarea:focus {
  outline: none;
  border-color: var(--primary);
}
</style>