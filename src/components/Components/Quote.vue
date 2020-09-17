<template>
  <div class="quote">
    <p
      class="quote-content"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quo perspiciatis dolorem eaque architecto quos quas ipsa? Sit iste ipsam iure ipsa eos quidem unde, dignissimos, maxime cumque, fuga beatae?</p>
    <p class="quote-author">Friedrich Nietzsche</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: String,
    author: String,
  },
};
</script>

<style scoped>
.quote {
  padding: 24px;
  border-top: 3px solid var(--primary);
}

.quote-content {
  color: var(--text);
  font-family: inherit;
  font-size: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
}

.quote-author {
  font-size: 18px;
  font-weight: 600;
  font-family: var(--heading-font);
  color: var(--primary);
}
</style>