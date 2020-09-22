<template>
  <div class="tags">
    <ul>
      <li>
        <a href="#">VueJs</a>
      </li>
      <li>
        <a href="#">React</a>
      </li>
      <li>
        <a href="#">Angular</a>
      </li>
      <li>
        <a href="#">Moment</a>
      </li>
      <li>
        <a href="#">Gulp</a>
      </li>
      <li>
        <a href="#">Normalize</a>
      </li>
      <li>
        <a href="#">Bootstrap</a>
      </li>
      <li>
        <a href="#">Django</a>
      </li>
      <li>
        <a href="#">Flask</a>
      </li>
      <li>
        <a href="#">Python</a>
      </li>
      <li>
        <a href="#">C</a>
      </li>
      <li>
        <a href="#">C++</a>
      </li>
      <li>
        <a href="#">Java</a>
      </li>
      <li>
        <a href="#">JavaScript</a>
      </li>
      <li>
        <a href="#">Haskel</a>
      </li>
      <li>
        <a href="#">PHP</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TagCloud",
};
</script>

<style scoped>
.tags {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tags ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
.tags ul li {
  width: fit-content;
  padding: 8px 12px;
  border: 1px solid var(--secondary);
  border-radius: 8px;
}
.tags ul li a {
  color: var(--text);
  text-decoration: none;
}
</style>