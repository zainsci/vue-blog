<template>
  <div class="form-container">
    <div class="login-form">
      <form action="/">
        <Label label="Email or Username" :for="'login-username'" />
        <Input type="text" name="login-username" id="login-username" />
        <Label label="Password" :for="'login-password'" />
        <Input type="password" name="login-password" id="login-password" />
        <Button btnText="Log In" />
      </form>
    </div>
  </div>
</template>

<script>
import Label from "./Forms/Label.vue";
import Input from "./Forms/Input.vue";
import Button from "./Components/Button.vue";

export default {
  name: "LoginForm",
  props: {},
  components: {
    Label,
    Input,
    Button,
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: var(--white);
  border: var(--primary-border);
  border-radius: var(--primary-radius);
}
</style>