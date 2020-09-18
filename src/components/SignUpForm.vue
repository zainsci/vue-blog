<template>
  <div class="form-container">
    <div class="signup-form">
      <form action="/" method="POST">
        <Label label="Email or Username" :for="'signup-username'" />
        <Input type="text" name="signup-username" id="signup-username" />
        <Label label="Password" :for="'signup-password'" />
        <Input type="password" name="signup-password" id="signup-password" />
        <Label label="Confirm Password" :for="'confirm-password'" />
        <Input type="password" name="confirm-password" id="confirm-password" />
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
  name: "SignUpForm",
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
.signup-form {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: var(--white);
  border: var(--primary-border);
  border-radius: var(--primary-radius);
}
</style>
