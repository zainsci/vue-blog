<template>
  <div class="form-container">
    <form action="/" class="login-form">
      <Input type="text" name="login-username" id="login-username" />
      <Input type="password" name="login-password" id="login-password" />
    </form>
  </div>
</template>

<script>
import Input from "./Forms/Input.vue";
export default {
  name: "LoginForm",
  props: {},
  components: {
    Input,
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 24px;
}
</style>